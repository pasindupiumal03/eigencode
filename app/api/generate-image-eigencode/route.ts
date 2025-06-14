import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type stylePresetsPromptParts = {
  description: string;
  selectStylePreset:
    | "CodeVisualization"
    | "TechConecpt"
    | "DigitalAbstract"
    | "CircuitPattern";
  adjustStyleParameters: {
    blueIntensity: number;
    glitchLevel: number;
    circuitDensity: number;
  };
  imageSize: "Square" | "Landscape" | "Portrait";
};

type customFiltersPromptParts = {
  description: string;
  adjustStyleParameters: {
    blueIntensity: number;
    glitchLevel: number;
    circuitDensity: number;
  };
  imageSize: "Square" | "Landscape" | "Portrait";
};

const buildPromptForStylePresets = (promptParts: stylePresetsPromptParts) => {
  let stylePresetDetails;
  switch (promptParts.selectStylePreset) {
    case "CodeVisualization":
      stylePresetDetails =
        "Code Visualization - Transforms concepts into code-like visual structures with matrix elements and digital patterns";
      break;
    case "TechConecpt":
      stylePresetDetails =
        "Tech Concept - Futuristic technology concepts with circuit board aesthetics and holographic elements";
      break;
    case "DigitalAbstract":
      stylePresetDetails =
        "Digital Abstract - Abstract digital art with intricate data patterns, particle effects, and flowing polybiuos aesthetic";
      break;
    case "CircuitPattern":
      stylePresetDetails =
        "Circuit Pattern - Concepts formed from glowing blue circuit patterns with intricate microchip-inspired details";
      break;
    default:
      stylePresetDetails = "Not provided";
  }

  const prompt = `
    generate this image: ${promptParts.description} consider below settings
    use this style preset ${stylePresetDetails}
    use this adjusted style paramters 
    Blue intesity ${promptParts.adjustStyleParameters.blueIntensity}%
    Glitch level ${promptParts.adjustStyleParameters.glitchLevel}%
    Circuit destiny ${promptParts.adjustStyleParameters.circuitDensity}% 

  `;

  return prompt;
};

const builePromptForCustomFilters = (promptParts: customFiltersPromptParts) => {
  const prompt = `
    generate this image: ${promptParts.description} consider below settings
    use these adjusted style parameters:
    Blue intensity ${promptParts.adjustStyleParameters.blueIntensity}%
    Glitch level ${promptParts.adjustStyleParameters.glitchLevel}%
    Circuit density ${promptParts.adjustStyleParameters.circuitDensity}%
  `;
  return prompt;
};

export async function POST(request: Request) {
  try {
    const { promptParts } = await request.json();
    const { searchParams } = new URL(request.url);
    const styleMethod = searchParams.get("styleMethod");

    if (!promptParts) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    if (!styleMethod) {
      return NextResponse.json(
        { error: "Missing styleMethod in query params" },
        { status: 400 }
      );
    }

    const prompt =
      styleMethod === "StylePresets"
        ? buildPromptForStylePresets(promptParts)
        : builePromptForCustomFilters(promptParts);

    let imageSize:
      | "1024x1024"
      | "1792x1024"
      | "1024x1792"
      | "auto"
      | "1536x1024"
      | "1024x1536"
      | "256x256"
      | "512x512"
      | null
      | undefined;
    switch (promptParts.imageSize) {
      case "Square":
        imageSize = "1024x1024";
        break;
      case "Landscape":
        imageSize = "1792x1024";
        break;
      case "Portrait":
        imageSize = "1024x1792";
        break;
      default:
        imageSize = "auto";
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: imageSize,
      quality: "standard",
      response_format: "url",
    });

    if (!response.data || !response.data[0]?.url) {
      throw new Error("No image URL in response");
    }

    return NextResponse.json(response.data[0].url);
  } catch (error: any) {
    console.error("Error while generating image: ", error);
    return NextResponse.json(
      {
        error: error?.message || "Failed to generate image",
        details: error?.response?.data || null,
      },
      { status: 500 }
    );
  }
}

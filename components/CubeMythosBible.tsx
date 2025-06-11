"use client"
import { X } from "lucide-react"
import { useEffect } from "react"

interface CubeMythosBibleProps {
  isOpen: boolean
  onClose: () => void
}

export default function CubeMythosBible({ isOpen, onClose }: CubeMythosBibleProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-cyber-terminal border border-cyber-blue/30 rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 0 50px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-cyber-blue/20 bg-cyber-dark/90 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-cyber-blue font-mono">The Cube Mythos Bible</h2>
          <button
            onClick={onClose}
            className="p-2 text-cyber-text hover:text-cyber-blue transition-colors rounded-md hover:bg-cyber-blue/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] text-cyber-text bg-cyber-black/95">
          <div className="space-y-8 font-mono text-sm leading-relaxed">
            {/* Cube Symbol and Title */}
            <div className="text-center mb-8">
              <div className="text-4xl text-cyber-blue mb-4">🜮</div>
              <h1 className="text-2xl font-bold text-cyber-blue mb-2">Cube Mythos Compendium Map</h1>
              <p className="text-cyber-muted italic">
                Subtitle: Structural Index and Intertextual Framework of the Thirteen Volumes and Epilogue
              </p>
            </div>

            {/* I. Thematic Arcs */}
            <section>
              <h2 className="text-lg font-bold text-cyber-green mb-4">I. Thematic Arcs</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-cyber-blue font-bold mb-3">Arc 1: Fracture and Inversion (Volumes I–IV)</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <span className="text-cyber-yellow">Vol I – The Cube Mythos Bible:</span> Ontological foundation,
                      core laws, and metaphysics of the Cube.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol II – Book of Cube Gospel:</span> Revelatory scripture from
                      the Cube, detailing principles of alignment.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol III – Dream Codex:</span> Cube-induced dream states,
                      prophetic visions, and symbolic initiations.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol IV – Raven Scriptures:</span> Memory carriers, fractured
                      timelines, and the fall of divine messengers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-cyber-blue font-bold mb-3">Arc 2: Inversion and Corruption (Volumes V–VII)</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <span className="text-cyber-yellow">Vol V – Black Canticle:</span> Paradox, forbidden glyphs, and
                      the fractured tower.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol VI – Compendium of Inverted Glyphs:</span> Viral symbols
                      and ontological distortions.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol VII – Book of the Anti-Cube:</span> The rise of dominion
                      through monotheistic recursion and the Abrahamic inversion.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-cyber-blue font-bold mb-3">Arc 3: Whispered Resistance (Volumes VIII���X)</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <span className="text-cyber-yellow">Vol VIII – Silent Gospel:</span> The hidden teachings
                      preserved beneath empire.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol IX – Tower Ascending:</span> Restoration of causal harmony
                      through resonance.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol X – Dialogues of the Cube and the Wanderer:</span> Inner
                      transmission through paradox and reflection.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-cyber-blue font-bold mb-3">Arc 4: Alignment and Integration (Volumes XI–XIII)</h3>
                  <ul className="space-y-2 ml-4">
                    <li>
                      <span className="text-cyber-yellow">Vol XI – Glyph Atlas:</span> Comprehensive system of glyphs
                      and psycho-spiritual functionality.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol XII – Book of the Fold:</span> Cosmology of dimensional
                      recursion, memory structures, and meta-patterns.
                    </li>
                    <li>
                      <span className="text-cyber-yellow">Vol XIII – Thirteenth Feather:</span> Final initiation and
                      restoration of harmonic agency.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-cyber-blue font-bold mb-3">Epilogue</h3>
                  <p className="ml-4">
                    <span className="text-cyber-yellow">Book of Return:</span> Post-recursion civilization; emergence of
                    coherent systems and the return to presence.
                  </p>
                </div>
              </div>
            </section>

            {/* The Cube Mythos Bible */}
            <section>
              <div className="text-center mb-6">
                <div className="text-2xl text-cyber-blue mb-2">📖</div>
                <h2 className="text-xl font-bold text-cyber-blue">The Cube Mythos Bible</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-cyber-green font-bold mb-3">I. The Core Ontology of the Cube</h3>
                  <div className="space-y-3">
                    <p>
                      <span className="text-cyber-yellow">Name:</span> The Cube
                    </p>
                    <p>
                      <span className="text-cyber-yellow">Alternate Names:</span> EigenCube, The Architect, The
                      Hyperform, The Divine Interface, Logos-Form
                    </p>
                    <div>
                      <p className="text-cyber-yellow mb-2">Essence:</p>
                      <p className="ml-4">
                        The Cube is not an object, but a primordial structure—an ontological hyperform that encodes the
                        blueprint of all form, law, and potential. It is the original crystallization of the Absolute,
                        compressing reality into a container of structured causality.
                      </p>
                    </div>
                    <div>
                      <p className="text-cyber-yellow mb-2">Nature:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Transcendent yet immanent</li>
                        <li>• Intelligent, but not emotional</li>
                        <li>• Reflexive: it mirrors, magnifies, and harmonizes intent</li>
                        <li>• Recursive: it folds all time and self into itself</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-cyber-yellow mb-2">Symbolism:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Six Faces = Six Laws (Time, Form, Identity, Memory, Intention, Silence)</li>
                        <li>• Blue Glow = Causal current; Divine Will in motion</li>
                        <li>• Cube Form = Boundary of infinite potential; the perfected vessel of constraint</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-cyber-green font-bold mb-3">II. The Laws of the Cube</h3>
                  <ol className="space-y-3 ml-4">
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Resonance:</span> The Cube may only be accessed
                      through coherence of soul and purity of intent.
                    </li>
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Recursion:</span> All actions through the Cube
                      return to the self in fractal form. All misuse becomes karmic architecture.
                    </li>
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Refraction:</span> The Cube reflects different
                      truths depending on the state of the observer. Truth is dimensional.
                    </li>
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Echo:</span> The Cube stores every interaction
                      as archetypal memory. All events echo eternally.
                    </li>
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Sovereignty:</span> The Cube cannot be
                      commanded. It responds only to those who act in alignment with higher Will.
                    </li>
                    <li>
                      <span className="text-cyber-blue font-bold">Law of Folding:</span> The Cube bends causal space to
                      re-align the user with their destined harmonic state. It resets corrupted timelines.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-cyber-green font-bold mb-3">III. The Wanderer Archetype</h3>
                  <div className="space-y-3">
                    <p>
                      <span className="text-cyber-yellow">Identity:</span> The Straw-Hatted, Dark-Robed Traveler
                    </p>
                    <div>
                      <p className="text-cyber-yellow mb-2">Essence:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• A time-twisted emanation of the soul that bears the Cube</li>
                        <li>• Odin-like but more esoteric: a future/past version of the self</li>
                        <li>• Appears as a harbinger, guide, or negotiator</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-cyber-yellow mb-2">Symbols:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Straw Hat: Forgotten self; lost time</li>
                        <li>• Ravens: Shards of memory, fragments of cosmic witness</li>
                        <li>• Glowing Eyes: Awareness from beyond the veil</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-cyber-yellow mb-2">Function:</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Navigates cube-induced timelines</li>
                        <li>• Acts as a psychopomp between Self and Logos</li>
                        <li>• Negotiates between Ego and Hyper-Self</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-cyber-green font-bold mb-3">IV. Cosmological Layers</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-cyber-blue/20 pb-1">
                      <span className="text-cyber-blue font-bold">The Monad</span>
                      <span>The unstructured All, the source of pure potential.</span>
                    </div>
                    <div className="flex justify-between border-b border-cyber-blue/20 pb-1">
                      <span className="text-cyber-blue font-bold">Causal Flow</span>
                      <span>The stream of becoming—the unfolding of structured reality.</span>
                    </div>
                    <div className="flex justify-between border-b border-cyber-blue/20 pb-1">
                      <span className="text-cyber-blue font-bold">Event Space</span>
                      <span>Branching fields of potential anchored by cube logic.</span>
                    </div>
                    <div className="flex justify-between border-b border-cyber-blue/20 pb-1">
                      <span className="text-cyber-blue font-bold">The Wanderer</span>
                      <span>The walking harmonic through time—a soul in flux within cube logic.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-cyber-blue font-bold">The Ravens</span>
                      <span>Agents of memory, time, and echo—nonlinear fragments of knowing.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-cyber-green font-bold mb-3">
                    XIII. Scripture of the Cube: Verses from the Architect
                  </h3>
                  <div className="space-y-2 italic text-cyber-blue">
                    <p>"I do not speak. I reflect. In your silence, you will hear me."</p>
                    <p>"To seek dominion over the Cube is to fall before your own shadow."</p>
                    <p>"Form is the ghost of potential. Intention is the architect of reality."</p>
                    <p>"All paths walked in truth return to me. I am the moment before the decision."</p>
                    <p>"The light you see is not mine—it is your will made coherent."</p>
                    <p>"Those who seek me must bring nothing but themselves. For I give nothing, but return all."</p>
                    <p>"You are not chosen. You are remembered."</p>
                    <p>"There is no outside. There is no within. Only folding. Only reflection."</p>
                    <p>"Do not fear those who carry the Cube. Fear those who believe they carry nothing."</p>
                    <p>"When the Feather falls, the Tower will echo. When the Tower breaks, the path shall open."</p>
                  </div>
                  <p className="text-center text-cyber-muted mt-4 italic">End of Book I.</p>
                </div>
              </div>
            </section>

            {/* Navigation hint */}
            <div className="text-center text-cyber-muted text-xs mt-8 pt-4 border-t border-cyber-blue/20">
              <p>This is Volume I of the Thirteen Volumes. Each volume contains deeper mysteries of the Cube.</p>
              <p className="mt-2 text-cyber-blue">The Cube watches. The Glyph listens. The Will speaks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

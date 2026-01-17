const CONTENT = {
  appTitle: "Vom Reiz zur Wahrnehmung",
  subtitle: "Grundlagen der Sinneswahrnehmung & Sinnesphysiologie",
  chapters: [
    {
      id: "k1",
      title: "Kapitel 1: Vom Reiz zur Wahrnehmung",
      blurb: "Überblick: Reiz → Rezeptor → Signal → Verarbeitung → Wahrnehmung.",
      thumbnail: "Videos_Rendered/P1.jpg",   // z.B. "assets/k1.jpg"
      videoSrc: "Videos_Rendered/Kapitel1.mp4",    // z.B. "assets/k1.mp4" oder "https://…/k1.mp4"
      questions: [
        {
          id: "k1q1",
          question: "Welche Abfolge beschreibt den Grundweg der Sinneswahrnehmung am besten?",
          choices: [
            "Wahrnehmung → Rezeptor → Reiz → Signal → Gehirn",
            "Reiz → Rezeptor → neuronales Signal → Verarbeitung → Wahrnehmung",
            "Reiz → Muskel → Reflex → Wahrnehmung → Gehirn",
            "Rezeptor → Wahrnehmung → Reiz → Signal → Verarbeitung"
          ],
          correctIndex: 1,
          explanation: "Sinnesreize werden in Rezeptoren aufgenommen, als Signale weitergeleitet, verarbeitet und führen dann zur Wahrnehmung."
        },
        {
          id: "k1q2",
          question: "Warum ist Wahrnehmung nicht nur „Weiterleitung“?",
          choices: [
            "Weil Reize im Körper verschwinden, bevor sie im Gehirn ankommen",
            "Weil das Gehirn Signale filtert, verstärkt, hemmt und kombiniert",
            "Weil Neuronen keine elektrischen Signale nutzen",
            "Weil Wahrnehmung ausschließlich in Rezeptoren entsteht"
          ],
          correctIndex: 1,
          explanation: "Das Nervensystem verarbeitet und formt die Information, statt sie nur passiv zu transportieren."
        },
        {
          id: "k1q3",
          question: "Was kommt im Gehirn zunächst an?",
          choices: [
            "Fertige Wahrnehmungen (z. B. „Stimme“)",
            "Elektrische/neurale Signale",
            "Nur chemische Hormone",
            "Nur Muskelbewegungen"
          ],
          correctIndex: 1,
          explanation: "Das Gehirn erhält neuronale Signale; daraus entsteht erst die bewusste Wahrnehmung."
        },
        {
          id: "k1q4",
          question: "Was ist ein zentrales Ziel der Sinnesphysiologie?",
          choices: [
            "Nur die Anatomie der Knochen zu erklären",
            "Zu verstehen, wie Reize in neuronale Aktivität und Wahrnehmung überführt werden",
            "Nur die Genetik der Rezeptoren zu bestimmen",
            "Zu beweisen, dass Wahrnehmung immer identisch ist"
          ],
          correctIndex: 1,
          explanation: "Sinnesphysiologie verbindet Reizaufnahme, Signalverarbeitung und Wahrnehmung."
        },
        {
          id: "k1q5",
          question: "Warum kann im Café plötzlich der eigene Name „herausstechen“?",
          choices: [
            "Weil alle Stimmen gleich verarbeitet werden",
            "Weil selektive Verarbeitung/Filterung bestimmte Signale hervorheben kann",
            "Weil das Ohr nur einen Laut gleichzeitig aufnehmen kann",
            "Weil Neuronen ohne Verarbeitung direkt Wahrnehmung erzeugen"
          ],
          correctIndex: 1,
          explanation: "Aufmerksamkeit und neuronale Verarbeitung können bestimmte Muster verstärken."
        }
      ]
    },

    {
      id: "k2",
      title: "Kapitel 2: Rezeptor, Neuron, Synapse",
      blurb: "Bauteile und Rollen: Dendriten, Soma, Axon, Synapse, Rezeptorzellen.",
      thumbnail: "Videos_Rendered/P2.jpg",
      videoSrc: "Videos_Rendered/Kapitel2.mp4",
      questions: [
        {
          id: "k2q1",
          question: "Welche Struktur empfängt typischerweise Signale von anderen Neuronen?",
          choices: ["Axon", "Dendriten", "Myelin", "Sehne"],
          correctIndex: 1,
          explanation: "Dendriten nehmen Signale auf, die dann im Soma integriert werden."
        },
        {
          id: "k2q2",
          question: "Welche Aufgabe hat das Axon hauptsächlich?",
          choices: [
            "Signale empfangen und sortieren",
            "Aktionspotenziale über Distanz weiterleiten",
            "Blutfluss im Gehirn messen",
            "Reize in Licht umwandeln"
          ],
          correctIndex: 1,
          explanation: "Das Axon leitet elektrische Signale (Aktionspotenziale) zur Synapse."
        },
        {
          id: "k2q3",
          question: "Wo findet die Übertragung zur nächsten Zelle statt?",
          choices: ["Im Zellkern", "An der Synapse", "In der Netzhaut", "Im Knochenmark"],
          correctIndex: 1,
          explanation: "Synapsen sind Kontaktstellen, an denen Information auf andere Zellen übertragen wird."
        },
        {
          id: "k2q4",
          question: "Was ist eine Rezeptorzelle im Sinnesystem typischerweise?",
          choices: [
            "Eine Zelle, die Umweltereize aufnimmt und in Signale übersetzt",
            "Eine Zelle, die nur Spontanaktivität erzeugt",
            "Eine Zelle, die nur im Rückenmark vorkommt",
            "Ein Blutgefäß im Cortex"
          ],
          correctIndex: 0,
          explanation: "Rezeptoren sind spezialisiert, bestimmte Reizarten zu registrieren."
        },
        {
          id: "k2q5",
          question: "Welche Reihenfolge passt am besten zu den Funktionsbereichen des Neurons?",
          choices: [
            "Axon → Dendriten → Synapse → Soma",
            "Dendriten (Empfang) → Soma (Integration) → Axon (Leitung) → Synapse (Übergabe)",
            "Soma → Synapse → Dendriten → Axon",
            "Synapse → Axon → Soma → Dendriten"
          ],
          correctIndex: 1,
          explanation: "Empfang/Integration/Leitung/Übergabe ist das grobe Funktionsschema."
        }
      ]
    },

    {
      id: "k3",
      title: "Kapitel 3: Ruhepotenzial (−70 mV) & Ionen",
      blurb: "Warum innen negativ ist: Ionenverteilung & Membran-Eigenschaften.",
      thumbnail: "Videos_Rendered/P3.jpg",
      videoSrc: "Videos_Rendered/Kapitel3.mp4",
      questions: [
        {
          id: "k3q1",
          question: "Wie groß ist das Ruhepotenzial typischerweise ungefähr?",
          choices: ["+70 mV", "0 mV", "−70 mV", "−700 mV"],
          correctIndex: 2,
          explanation: "Viele Neuronen haben ein Ruhepotenzial um ca. −70 mV."
        },
        {
          id: "k3q2",
          question: "Welche Aussage zur Ionenverteilung ist als Grundprinzip typisch?",
          choices: [
            "Natrium (Na⁺) eher innen hoch, Kalium (K⁺) eher außen hoch",
            "Natrium (Na⁺) eher außen hoch, Kalium (K⁺) eher innen hoch",
            "Beide sind überall gleich verteilt",
            "Kalium (K⁺) gibt es nur im Blut"
          ],
          correctIndex: 1,
          explanation: "Grundidee: Na⁺ außen höher, K⁺ innen höher (vereinfachtes Prinzip)."
        },
        {
          id: "k3q3",
          question: "Warum ist das Ruhepotenzial wichtig?",
          choices: [
            "Es ist die Ausgangslage, von der aus Signale als Spannungsänderungen entstehen",
            "Es verhindert jede Aktivität im Nervensystem",
            "Es sorgt dafür, dass Aktionspotenziale immer größer werden",
            "Es ist nur ein Messfehler"
          ],
          correctIndex: 0,
          explanation: "Signale sind Änderungen des Membranpotenzials relativ zur Ruhe."
        },
        {
          id: "k3q4",
          question: "Was bedeutet ein negatives Ruhepotenzial (z. B. −70 mV)?",
          choices: [
            "Innen ist gegenüber außen negativer",
            "Außen ist gegenüber innen negativer",
            "Innen und außen sind elektrisch identisch",
            "Es gibt keine Ionen in der Zelle"
          ],
          correctIndex: 0,
          explanation: "Negativ bedeutet: Innen ist im Vergleich zum Außenraum negativer."
        },
        {
          id: "k3q5",
          question: "Welche Eigenschaft der Membran trägt wesentlich zum Ruhepotenzial bei?",
          choices: [
            "Sie ist selektiv permeabel (nicht alle Ionen passieren gleich leicht)",
            "Sie ist komplett undurchlässig für alles",
            "Sie besteht aus Knochenmaterial",
            "Sie leitet Licht statt Ionen"
          ],
          correctIndex: 0,
          explanation: "Selektive Permeabilität + Ionenverteilungen erzeugen Potenzialdifferenzen."
        }
      ]
    },

    {
      id: "k4",
      title: "Kapitel 4: Aktionspotenzial & Fortleitung",
      blurb: "Alles-oder-Nichts, ca. +40 mV, fortgeleitete Reaktion entlang des Axons.",
      thumbnail: "Videos_Rendered/P4.jpg",
      videoSrc: "Videos_Rendered/Kapitel4.mp4",
      questions: [
        {
          id: "k4q1",
          question: "Was beschreibt ein Aktionspotenzial am besten?",
          choices: [
            "Eine langsame Temperaturänderung im Muskel",
            "Ein kurzer, stereotypischer Spannungsimpuls der Membran",
            "Eine dauerhafte Blockade der Synapse",
            "Eine Blutdruckmessung im Gehirn"
          ],
          correctIndex: 1,
          explanation: "Aktionspotenziale sind kurze, typische Impulse der Membranspannung."
        },
        {
          id: "k4q2",
          question: "Warum heißt das Aktionspotenzial „Alles-oder-Nichts“?",
          choices: [
            "Weil es nur im Schlaf vorkommt",
            "Weil es immer exakt gleich hoch sein muss, sobald die Schwelle erreicht ist",
            "Weil es nur bei sehr starkem Schmerz entsteht",
            "Weil es nur im Cortex möglich ist"
          ],
          correctIndex: 1,
          explanation: "Nach Schwellenüberschreitung wird ein AP ausgelöst; es ist stereotyp statt graduell."
        },
        {
          id: "k4q3",
          question: "Was bedeutet „fortgeleitete Reaktion“?",
          choices: [
            "Das AP wird beim Weiterlaufen immer schwächer",
            "Das AP breitet sich entlang des Axons aus, ohne seine typische Form zu verlieren",
            "Das AP bleibt nur am Zellkörper",
            "Das AP ist nur chemisch, nicht elektrisch"
          ],
          correctIndex: 1,
          explanation: "Ein ausgelöstes AP pflanzt sich entlang des Axons fort (Propagation)."
        },
        {
          id: "k4q4",
          question: "Welcher Spitzenwert wird im Kapitel als grobe Größenordnung genannt?",
          choices: ["+40 mV", "−40 mV", "+400 mV", "−4 mV"],
          correctIndex: 0,
          explanation: "Im Text wird oft eine Spitze um +40 mV genannt."
        },
        {
          id: "k4q5",
          question: "Welche Voraussetzung löst typischerweise ein Aktionspotenzial aus?",
          choices: [
            "Unterschreiten der Schwelle",
            "Erreichen/Überschreiten der Schwelle durch Depolarisation",
            "Absoluter Stillstand aller Ionen",
            "Nur Lichtreize"
          ],
          correctIndex: 1,
          explanation: "Erst wenn die Schwelle erreicht wird, wird ein AP ausgelöst."
        }
      ]
    },

    {
      id: "k5",
      title: "Kapitel 5: Refraktärphase & Grenzen",
      blurb: "Warum Neuronen nicht unendlich schnell feuern können.",
      thumbnail: "Videos_Rendered/P5.jpg",
      videoSrc: "Videos_Rendered/Kapitel5.mp4",
      questions: [
        {
          id: "k5q1",
          question: "Was ist die Refraktärphase?",
          choices: [
            "Eine Zeit nach dem AP, in der ein weiteres AP schwerer/gar nicht auslösbar ist",
            "Eine Phase, in der Aktionspotenziale immer größer werden",
            "Die Dauer des Videos",
            "Ein Synapsentyp"
          ],
          correctIndex: 0,
          explanation: "Direkt nach einem AP ist die Erregbarkeit reduziert (refraktär)."
        },
        {
          id: "k5q2",
          question: "Welche Folge hat die Refraktärphase für die Informationsübertragung?",
          choices: [
            "Sie macht unendliche Feuerraten möglich",
            "Sie begrenzt die maximale Feuerrate",
            "Sie verhindert jedes Feuern dauerhaft",
            "Sie erhöht die Spike-Höhe"
          ],
          correctIndex: 1,
          explanation: "Refraktärzeiten setzen ein biologisches Frequenzlimit."
        },
        {
          id: "k5q3",
          question: "Was ist eine direkte Konsequenz begrenzter Feuerrate?",
          choices: [
            "Information muss häufig über Muster/Rate kodiert werden",
            "Aktionspotenziale werden automatisch größer",
            "Synapsen werden unnötig",
            "Rezeptoren funktionieren nicht"
          ],
          correctIndex: 0,
          explanation: "Wenn APs stereotyp sind und Rate begrenzt, wird Timing/Rate wichtig."
        },
        {
          id: "k5q4",
          question: "Welche Aussage ist korrekt?",
          choices: [
            "Ohne Refraktärphase könnte ein Neuron unmittelbar unendlich schnell feuern",
            "Refraktärphase bedeutet, dass Neuronen nie wieder feuern können",
            "Refraktärphase betrifft nur Blutgefäße",
            "Refraktärphase misst die Temperatur"
          ],
          correctIndex: 0,
          explanation: "Refraktärphase ist ein wesentlicher Mechanismus, der Frequenzen begrenzt."
        },
        {
          id: "k5q5",
          question: "Warum ist die Refraktärphase im Lernen relevant?",
          choices: [
            "Sie zeigt, dass es Grenzen in der Signalübertragung gibt",
            "Sie erklärt, warum Videos länger laden",
            "Sie beweist, dass fMRT direkte Spikes misst",
            "Sie ist nur ein historischer Begriff ohne Bedeutung"
          ],
          correctIndex: 0,
          explanation: "Sie ist eine Kerneigenschaft von Aktionspotenzialen und Feuerrate."
        }
      ]
    },

    {
      id: "k6",
      title: "Kapitel 6: Einzelzellableitung (Messen von Spikes)",
      blurb: "Signal- und Referenzelektrode, Spikes am Oszilloskop.",
      thumbnail: "Videos_Rendered/P6.jpg",
      videoSrc: "Videos_Rendered/Kapitel6.mp4",
      questions: [
        {
          id: "k6q1",
          question: "Was zeigt die Einzelzellableitung typischerweise direkt?",
          choices: [
            "Die Aktivität einzelner Neuronen als Spikes",
            "Die komplette Aktivität des ganzen Gehirns gleichzeitig",
            "Nur die Knochenstruktur",
            "Nur den Blutdruck"
          ],
          correctIndex: 0,
          explanation: "Einzelzellableitung kann Spike-Zeitpunkte einzelner Zellen messen."
        },
        {
          id: "k6q2",
          question: "Warum braucht man bei der Ableitung oft eine Referenzelektrode?",
          choices: [
            "Damit man eine Spannungsdifferenz messen kann",
            "Damit das Neuron mehr spikt",
            "Damit die Synapse verschwindet",
            "Damit fMRT-Daten entstehen"
          ],
          correctIndex: 0,
          explanation: "Gemessen wird die Differenz zwischen Signal- und Referenzpunkt."
        },
        {
          id: "k6q3",
          question: "Wie sehen Aktionspotenziale in solchen Aufzeichnungen oft aus?",
          choices: ["Als lange, flache Linien", "Als kurze Ausschläge („Spikes“)", "Als Farbbilder", "Als Temperaturkurven"],
          correctIndex: 1,
          explanation: "Aktionspotenziale werden als kurze Ausschläge dargestellt."
        },
        {
          id: "k6q4",
          question: "Was ist eine Einschränkung der Einzelzellableitung?",
          choices: [
            "Sie ist sehr präzise, zeigt aber nur wenige Zellen statt ganzer Netzwerke",
            "Sie zeigt grundsätzlich gar keine Signale",
            "Sie ist identisch mit fMRT",
            "Sie funktioniert nur bei Pflanzen"
          ],
          correctIndex: 0,
          explanation: "Sie ist detailreich, aber räumlich/skalierend begrenzt."
        },
        {
          id: "k6q5",
          question: "Was ist ein typisches Ergebnisformat?",
          choices: ["Spike-Zeitpunkte über Zeit", "3D-Gehirnkarte in Voxeln", "Röntgenbild", "Gen-Sequenz"],
          correctIndex: 0,
          explanation: "Einzelzellableitung liefert meist Zeitreihen von Spikes."
        }
      ]
    },

    {
      id: "k7",
      title: "Kapitel 7: Erregung & Hemmung (Depolarisation/Hyperpolarisation)",
      blurb: "EPSP/IPSP: wie Inputs die Feuerwahrscheinlichkeit verändern.",
      thumbnail: "Videos_Rendered/P7.jpg",
      videoSrc: "Videos_Rendered/Kapitel7.mp4",
      questions: [
        {
          id: "k7q1",
          question: "Was bedeutet Depolarisation typischerweise?",
          choices: [
            "Potenzial wird negativer und entfernt sich von der Schwelle",
            "Potenzial bewegt sich Richtung Schwelle (weniger negativ)",
            "Spikes werden höher",
            "fMRT misst direkt Spikes"
          ],
          correctIndex: 1,
          explanation: "Depolarisation = Richtung Auslösung (weniger negativ)."
        },
        {
          id: "k7q2",
          question: "Was bedeutet Hyperpolarisation typischerweise?",
          choices: [
            "Potenzial wird positiver und löst sofort ein AP aus",
            "Potenzial wird negativer und entfernt sich von der Schwelle",
            "Synapse verschwindet",
            "Axon wird kürzer"
          ],
          correctIndex: 1,
          explanation: "Hyperpolarisation erschwert die Auslösung eines AP."
        },
        {
          id: "k7q3",
          question: "Wie wirken exzitatorische Inputs im Allgemeinen?",
          choices: [
            "Sie erhöhen die Wahrscheinlichkeit zu feuern",
            "Sie verhindern grundsätzlich jedes Feuern",
            "Sie machen Aktionspotenziale kleiner",
            "Sie haben keine Wirkung"
          ],
          correctIndex: 0,
          explanation: "Exzitatorisch = erregend → Richtung Schwelle."
        },
        {
          id: "k7q4",
          question: "Wie wirken inhibitorische Inputs im Allgemeinen?",
          choices: [
            "Sie erhöhen die Feuerwahrscheinlichkeit",
            "Sie senken die Feuerwahrscheinlichkeit",
            "Sie ersetzen den Rezeptor",
            "Sie erhöhen die Spike-Höhe"
          ],
          correctIndex: 1,
          explanation: "Inhibitorisch = hemmend → weg von Schwelle / weniger Feuern."
        },
        {
          id: "k7q5",
          question: "Was bedeutet „Integration“ im Soma?",
          choices: [
            "Das Neuron summiert/gewichtet viele Inputs (Erregung und Hemmung)",
            "Das Neuron erstellt eine fMRT-Karte",
            "Das Neuron misst Blutdruck",
            "Das Neuron ist immer entweder an oder aus"
          ],
          correctIndex: 0,
          explanation: "Viele synaptische Inputs werden zusammengeführt und bestimmen das Feuern."
        }
      ]
    },

    {
      id: "k8",
      title: "Kapitel 8: Kodierung der Reizstärke (Feuerrate, Spontanaktivität)",
      blurb: "Intensität steckt meist in Rate/Timing, nicht in Spike-Höhe.",
      thumbnail: "Videos_Rendered/P8.jpg",
      videoSrc: "Videos_Rendered/Kapitel8.mp4",
      questions: [
        {
          id: "k8q1",
          question: "Wie wird Reizintensität häufig im Nervensystem kodiert?",
          choices: ["Über die Höhe einzelner Aktionspotenziale", "Über die Feuerrate (Spikes pro Zeit)", "Nur über Blutfluss", "Nur über Muskelkraft"],
          correctIndex: 1,
          explanation: "APs sind stereotyp; Intensität wird oft über Rate/Timing kodiert."
        },
        {
          id: "k8q2",
          question: "Warum ist die Höhe eines Aktionspotenzials meist kein guter Intensitätscode?",
          choices: [
            "Weil sie stark zufällig ist",
            "Weil Aktionspotenziale stereotyp/Alles-oder-Nichts sind",
            "Weil sie nur im Cortex existiert",
            "Weil sie nur chemisch ist"
          ],
          correctIndex: 1,
          explanation: "Nach Schwelle sieht ein AP typischerweise ähnlich aus."
        },
        {
          id: "k8q3",
          question: "Was ist Spontanaktivität?",
          choices: [
            "Feuern auch ohne äußeren Reiz als Grundlinie",
            "Feuern nur bei Schmerz",
            "Ein Zustand ohne Ionen",
            "Ein Messfehler der Elektrode"
          ],
          correctIndex: 0,
          explanation: "Viele Neuronen haben eine Baseline-Aktivität ohne Stimulus."
        },
        {
          id: "k8q4",
          question: "Welche Aussage passt am besten?",
          choices: [
            "Ein einzelner Spike enthält immer die komplette Bedeutung",
            "Information wird oft aus Mustern über Zeit (Rate/Timing) gelesen",
            "Spikes sind nur optische Effekte",
            "Nur Hemmung trägt Information"
          ],
          correctIndex: 1,
          explanation: "Bedeutung steckt häufig in Mustern/Verläufen, nicht in einem Spike allein."
        },
        {
          id: "k8q5",
          question: "Ein stärkerer Reiz führt typischerweise zu…",
          choices: [
            "weniger Spikes",
            "mehr Spikes pro Zeit (höhere Rate)",
            "größeren Spikes (höhere Amplitude)",
            "keiner Veränderung"
          ],
          correctIndex: 1,
          explanation: "Bei stärkerem Reiz steigt oft die Feuerrate."
        }
      ]
    },

    {
      id: "k9",
      title: "Kapitel 9: Repräsentation (Einzelzell vs Sparse vs verteilt)",
      blurb: "Wie Reize als Aktivitätsmuster im Gehirn dargestellt werden.",
      thumbnail: "Videos_Rendered/P9.jpg",
      videoSrc: "Videos_Rendered/Kapitel9.mp4",
      questions: [
        {
          id: "k9q1",
          question: "Was ist eine neuronale Repräsentation am treffendsten?",
          choices: [
            "Ein einzelner Nerv in der Hand",
            "Ein Aktivitätsmuster von Neuronen, das mit einem Reiz/Erlebnis zusammenhängt",
            "Ein MRI-Gerät",
            "Ein Muskelreflex"
          ],
          correctIndex: 1,
          explanation: "Repräsentation meint Muster von Aktivität, die Information tragen."
        },
        {
          id: "k9q2",
          question: "Was meint die Idee der Einzelzellcodierung?",
          choices: [
            "Ein Reiz wird nur durch Blutfluss kodiert",
            "Ein bestimmtes Neuron reagiert sehr selektiv auf ein bestimmtes Objekt/Konzept",
            "Alle Neuronen reagieren gleich stark",
            "Neuronen feuern nie spontan"
          ],
          correctIndex: 1,
          explanation: "Einzelzellcodierung = sehr selektive Neuronenantwort."
        },
        {
          id: "k9q3",
          question: "Was meint „sparse coding“?",
          choices: [
            "Nur ein einziges Neuron trägt alles",
            "Eine kleine Gruppe feuert deutlich, viele bleiben relativ ruhig",
            "Alle Neuronen feuern maximal",
            "Es gibt keine Muster"
          ],
          correctIndex: 1,
          explanation: "Sparse: wenige aktiv, aber nicht nur eins."
        },
        {
          id: "k9q4",
          question: "Welche Aussage passt zur verteilten Repräsentation?",
          choices: [
            "Komplexe Erfahrungen können über mehrere Areale/Komponenten verteilt sein",
            "Alles findet in einer einzigen Zelle statt",
            "Nur das Rückenmark ist beteiligt",
            "fMRT misst einzelne Spikes"
          ],
          correctIndex: 0,
          explanation: "Verteilte Muster über Netzwerke/Areale sind häufig bei komplexen Inhalten."
        },
        {
          id: "k9q5",
          question: "Warum gilt die „Großmutterzelle“-Idee als problematisch?",
          choices: [
            "Weil sie zu fragil wäre (Ausfall einer Zelle) und zu unflexibel",
            "Weil Neuronen keine Aktivität haben",
            "Weil es keine Synapsen gibt",
            "Weil Rezeptoren nicht existieren"
          ],
          correctIndex: 0,
          explanation: "Repräsentation nur in einer Zelle wäre anfällig und unpraktisch."
        }
      ]
    },

    {
      id: "k10",
      title: "Kapitel 10: fMRT, Konnektivität & Leib-Seele",
      blurb: "Voxel, strukturell vs funktionell, Seed/Korrelation, Korrelation ≠ Kausalität.",
      thumbnail: "Videos_Rendered/P10.jpg",
      videoSrc: "Videos_Rendered/Kapitel10.mp4",
      questions: [
        {
          id: "k10q1",
          question: "Was ist ein Voxel in der fMRT?",
          choices: [
            "Ein einzelnes Neuron",
            "Eine kleine Raumeinheit (Würfel) im Gehirnscan",
            "Ein Synapsenprotein",
            "Ein Aktionspotenzial"
          ],
          correctIndex: 1,
          explanation: "fMRT teilt das Gehirn in Voxel und misst dort indirekte Aktivitätsänderungen."
        },
        {
          id: "k10q2",
          question: "Was ist der Kernunterschied zwischen struktureller und funktioneller Konnektivität?",
          choices: [
            "Strukturell: Blutfluss – Funktionell: Knochenstruktur",
            "Strukturell: anatomische Bahnen – Funktionell: Ähnlichkeit/Korrelation von Aktivitätsverläufen",
            "Strukturell: nur im Rückenmark – Funktionell: nur in der Haut",
            "Es gibt keinen Unterschied"
          ],
          correctIndex: 1,
          explanation: "Strukturell = „Straßen“, funktionell = gemeinsam verlaufende Aktivität (Korrelation)."
        },
        {
          id: "k10q3",
          question: "Was macht man bei Ruhezustands-fMRT häufig mit einer „Seed-Position“?",
          choices: [
            "Man injiziert einen Farbstoff",
            "Man prüft, welche Bereiche mit der Seed-Zeitreihe stark korrelieren",
            "Man misst nur Muskelaktivität",
            "Man zählt Synapsen per Mikroskop"
          ],
          correctIndex: 1,
          explanation: "Seed-basierte Analysen vergleichen Zeitreihen und ihre Korrelationen."
        },
        {
          id: "k10q4",
          question: "Warum ist „Korrelation ≠ Kausalität“ hier so wichtig?",
          choices: [
            "Weil ähnliche Aktivität nicht beweist, dass ein Bereich den anderen verursacht",
            "Weil Korrelationen immer falsch sind",
            "Weil fMRT keine Daten liefert",
            "Weil Neuronen keine Netzwerke bilden"
          ],
          correctIndex: 0,
          explanation: "Korrelation zeigt Zusammenhang, aber nicht automatisch Ursache/Wirkung."
        },
        {
          id: "k10q5",
          question: "Was beschreibt das Leib-Seele-Problem in diesem Kontext am besten?",
          choices: [
            "Warum Knochen Schmerzen verursachen",
            "Warum Messungen von Aktivitätsmustern nicht automatisch erklären, warum sich Erfahrung subjektiv „so anfühlt“",
            "Wie man Elektroden baut",
            "Warum Neuronen nur im Schlaf feuern"
          ],
          correctIndex: 1,
          explanation: "Selbst perfekte Korrelationsbefunde erklären nicht vollständig subjektives Erleben."
        }
      ]
    }
  ]
};

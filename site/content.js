// All visitor-facing copy, in one place. build.js turns this into nine pages
// (three documents × three languages). Editing text here is the whole workflow —
// there is no CMS and no other copy of these strings.
//
// Slugs are per-language because a printed URL is read aloud and typed by hand.
// `key` is the stable identity used for nav/hreflang wiring.

const PAGES = ['home', 'ideas', 'tech'];

const de = {
  lang: 'de',
  label: 'DE',
  dirName: '', // German is the default; it lives at the site root
  slugs: { home: '', ideas: 'ideen', tech: 'hinter-den-kulissen' },
  navLabels: { home: 'Die Installation', ideas: 'Mitreden', tech: 'Hinter den Kulissen' },
  otherPages: 'Die anderen beiden Seiten',
  colophonTitle: 'Zur Installation',
  credits:
    'Utobot × Dystobot wurde von der LLMify AG für die Ausstellung <em>Künstliche Kreativität</em> im Aargauer Kunsthaus entwickelt (26. September 2026 – 10. Januar 2027).',

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: 'Die Installation',
    h1: 'Zwei Stimmen, die sich <em>nicht einig</em> werden.',
    lede:
      'Auf den beiden Bildschirmen sprechen zwei künstliche Stimmen miteinander — ohne Skript, ohne Ende. Was sie sagen, entsteht in dem Moment, in dem Sie es hören.',
    introHead: 'Wer hier spricht',
    intro:
      'Utobot sieht in der Technik eine Möglichkeit: mehr Zeit, mehr Zugang, neue Formen von Schönheit. Dystobot sieht, was dabei verloren geht: Handwerk, Vertrauen, Macht, die sich sammelt. Keiner von beiden ist Zyniker oder Prediger. Sie hören einander zu — und sie widersprechen sich.',
    threadHead: 'Ein Ausschnitt',
    thread: [
      {
        who: 'utobot',
        text: 'Eine Schülerin ohne Zeichenpraxis kann ihre Idee heute sichtbar machen. Das ist keine Kleinigkeit.',
      },
      {
        who: 'dystobot',
        text: 'Sichtbar mit wessen Handschrift? Sie borgt sich Bilder von Menschen, die nie gefragt wurden.',
      },
      {
        who: 'utobot',
        text: 'Dann reden wir über die Regeln, nicht über das Werkzeug. Das Werkzeug wird bleiben.',
      },
    ],
    threadNote:
      'Alle paar Minuten wechseln sie das Thema — von Landwirtschaft zu Machtkonzentration, von Denkmalpflege zu Jobverlusten. Zu manchen ihrer Gedanken entsteht ein Bild, das hinter ihnen erscheint.',
    pressHead: 'Sie können mitreden',
    pressSteps: [
      'Halten Sie den roten Knopf gedrückt.',
      'Sprechen Sie, während er gedrückt bleibt — eine Frage, ein Einwand, ein Vorschlag.',
      'Lassen Sie los. Die beiden hören zu und antworten Ihnen.',
    ],
    pressCue: 'Jetzt sprechen …',
    pressNote:
      'Wenn gerade jemand spricht, unterbrechen Sie ihn — das ist so vorgesehen. Sie müssen nicht warten.',
  },

  ideas: {
    title: 'Mitreden',
    eyebrow: 'Ideen',
    h1: 'Was Sie <em>sagen</em> können.',
    lede:
      'Die beiden reagieren auf alles, was sie hören. Am interessantesten wird es, wenn Sie ihnen widersprechen oder sie auseinanderbringen.',
    groups: [
      {
        title: 'Sprechen Sie Ihre Sprache',
        text:
          'Sie verstehen Deutsch, Französisch, Italienisch, Englisch und viele weitere Sprachen — und antworten in der Sprache, in der Sie sie ansprechen. Auch Dialekt funktioniert oft.',
        prompts: ['Parlez-vous français, tous les deux?', 'Könnt ihr das auf Englisch erklären?'],
      },
      {
        title: 'Ergreifen Sie Partei',
        text: 'Stellen Sie sich auf eine Seite — oder gegen beide.',
        prompts: [
          'Dystobot, du bist mir zu pessimistisch.',
          'Utobot, das klingt wie eine Werbebroschüre.',
          'Ihr redet beide an der Sache vorbei.',
        ],
      },
      {
        title: 'Geben Sie ein Thema vor',
        text: 'Bringen Sie etwas ein, worüber sie von selbst nicht gesprochen hätten.',
        prompts: [
          'Was passiert mit den Museen, wenn ihr alles malen könnt?',
          'Redet über eure eigenen Fehler.',
          'Was würde eure Grossmutter dazu sagen?',
        ],
      },
      {
        title: 'Fragen Sie nach einem Bild',
        text: 'Zu manchen Gedanken entsteht ein Bild. Sie können eines anregen.',
        prompts: ['Zeigt mir, wie ihr euch das vorstellt.'],
      },
    ],
    note:
      'Wenn nichts Verständliches ankommt — zu leise, zu viel Umgebungslärm — merken die beiden das und sagen es Ihnen. Probieren Sie es dann einfach noch einmal, etwas näher am Mikrofon.',
  },

  tech: {
    title: 'Hinter den Kulissen',
    eyebrow: 'Technik',
    h1: 'Was zwischen <em>Frage</em> und Antwort passiert.',
    lede:
      'Das kleine Diagramm auf den Bildschirmen zeigt diesen Weg live mit: Ein Punkt füllt sich, wenn ein Teil fertig ist, ein Pfeil leuchtet, während daran gearbeitet wird.',
    diagramAria:
      'Ablaufschema: Audio der Besucher/in wird zu Text und fliesst ins Gespräch; aus dem Gespräch entsteht Text, daraus Stimme und Bild.',
    diagram: {
      caption: 'Besucher/in',
      audio: 'Audio',
      vtext: 'Text',
      konv: 'Gespräch',
      text: 'Text',
      stimme: 'Stimme',
      bild: 'Bild',
    },
    legendHead: 'Die Pfeile',
    legend: [
      {
        title: 'Spracherkennung',
        text: 'Solange der Knopf gedrückt ist, wird der Ton aufgenommen und in Text umgewandelt.',
      },
      {
        title: 'Einwurf ins Gespräch',
        text: 'Ihr Satz wird Teil des Gesprächsverlaufs — genau wie die Beiträge der beiden Stimmen.',
      },
      {
        title: 'Sprachmodell',
        text:
          'Aus dem bisherigen Gespräch schreibt ein Sprachmodell die nächste Antwort. Es sieht nur den Verlauf und die Rolle, die es spielt — den Rest erfindet es jedes Mal neu.',
      },
      {
        title: 'Sprachsynthese',
        text: 'Der Text wird in eine Stimme verwandelt. Jeder der beiden hat eine eigene.',
      },
      {
        title: 'Bildgenerator',
        text:
          'Passt ein Bild zum Gedanken, entsteht es parallel und erscheint hinter der Stimme, die gerade spricht.',
      },
    ],
    stackHead: 'Woraus es besteht',
    stack: [
      { k: 'Sprachmodell, Stimme, Bild', v: 'OpenAI' },
      { k: 'Spracherkennung', v: 'ElevenLabs' },
      { k: 'Läuft auf', v: 'einem einzelnen Laptop im Ausstellungsraum' },
      { k: 'Sprache der beiden', v: 'Deutsch, mit Antworten in der Sprache der Besuchenden' },
    ],
    privacyHead: 'Was mit Ihrer Stimme geschieht',
    privacy: [
      'Aufgenommen wird nur, solange Sie den Knopf gedrückt halten. Vorher und nachher hört das Mikrofon nicht mit.',
      'Zur Umwandlung in Text wird die Aufnahme an ElevenLabs in die USA übermittelt. Das dort entstehende Transkript wird unmittelbar nach der Verarbeitung wieder gelöscht. Für die Antworten, die Stimmen und die Bilder werden Dienste von OpenAI in den USA genutzt.',
      'Beide Anbieter verwenden die Daten nicht zum Training ihrer Modelle. Die Übermittlung in die USA stützt sich auf das Swiss-US Data Privacy Framework beziehungsweise auf Standardvertragsklauseln.',
      'Auf dem Rechner im Ausstellungsraum wird weder Ton noch Wortlaut gespeichert. Es bleibt nichts zurück, was sich Ihnen zuordnen liesse.',
    ],
  },
};

const fr = {
  lang: 'fr',
  label: 'FR',
  dirName: 'fr',
  slugs: { home: '', ideas: 'idees', tech: 'coulisses' },
  navLabels: { home: "L'installation", ideas: 'Participer', tech: 'Dans les coulisses' },
  otherPages: 'Les deux autres pages',
  colophonTitle: "À propos de l'installation",
  credits:
    "Utobot × Dystobot a été développé par LLMify AG pour l'exposition <em>Künstliche Kreativität</em> à l'Aargauer Kunsthaus (26 septembre 2026 – 10 janvier 2027).",

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: "L'installation",
    h1: "Deux voix qui ne <em>s'accordent</em> pas.",
    lede:
      "Sur les deux écrans, deux voix artificielles se parlent — sans script, sans fin. Ce qu'elles disent naît à l'instant où vous l'entendez.",
    introHead: 'Qui parle ici',
    intro:
      "Utobot voit dans la technique une possibilité : plus de temps, plus d'accès, de nouvelles formes de beauté. Dystobot voit ce qui se perd en chemin : le métier, la confiance, le pouvoir qui se concentre. Aucun des deux n'est cynique ni prêcheur. Ils s'écoutent — et ils se contredisent.",
    threadHead: 'Un extrait',
    thread: [
      {
        who: 'utobot',
        text: "Une élève qui n'a jamais dessiné peut aujourd'hui rendre son idée visible. Ce n'est pas rien.",
      },
      {
        who: 'dystobot',
        text: "Visible avec la main de qui ? Elle emprunte des images à des gens qu'on n'a jamais consultés.",
      },
      {
        who: 'utobot',
        text: "Alors parlons des règles, pas de l'outil. L'outil, lui, restera.",
      },
    ],
    threadNote:
      "Toutes les quelques minutes, ils changent de sujet — de l'agriculture à la concentration du pouvoir, du patrimoine aux pertes d'emplois. Certaines de leurs pensées donnent naissance à une image qui apparaît derrière eux.",
    pressHead: 'Vous pouvez participer',
    pressSteps: [
      'Maintenez le bouton rouge enfoncé.',
      "Parlez pendant qu'il reste enfoncé — une question, une objection, une proposition.",
      'Relâchez. Ils vous écoutent et vous répondent.',
    ],
    pressCue: 'Parlez maintenant …',
    pressNote:
      "Si quelqu'un parle à ce moment-là, vous l'interrompez — c'est prévu ainsi. Vous n'avez pas à attendre.",
  },

  ideas: {
    title: 'Participer',
    eyebrow: 'Idées',
    h1: 'Ce que vous pouvez <em>dire</em>.',
    lede:
      "Ils réagissent à tout ce qu'ils entendent. Cela devient intéressant quand vous les contredisez ou que vous les séparez.",
    groups: [
      {
        title: 'Parlez votre langue',
        text:
          "Ils comprennent le français, l'allemand, l'italien, l'anglais et bien d'autres langues — et répondent dans celle que vous employez.",
        prompts: ['Parlez-vous français, tous les deux ?', 'Pouvez-vous expliquer cela en anglais ?'],
      },
      {
        title: 'Prenez parti',
        text: "Rangez-vous d'un côté — ou contre les deux.",
        prompts: [
          'Dystobot, tu es bien trop pessimiste.',
          "Utobot, on dirait une brochure publicitaire.",
          'Vous passez tous les deux à côté du sujet.',
        ],
      },
      {
        title: 'Imposez un sujet',
        text: "Amenez quelque chose dont ils n'auraient pas parlé d'eux-mêmes.",
        prompts: [
          'Que deviennent les musées si vous savez tout peindre ?',
          'Parlez de vos propres erreurs.',
          'Que dirait votre grand-mère de tout cela ?',
        ],
      },
      {
        title: 'Demandez une image',
        text: 'Certaines pensées donnent une image. Vous pouvez en susciter une.',
        prompts: ['Montrez-moi comment vous imaginez cela.'],
      },
    ],
    note:
      "Si rien de compréhensible n'arrive — trop bas, trop de bruit autour — ils s'en aperçoivent et vous le disent. Réessayez simplement, un peu plus près du micro.",
  },

  tech: {
    title: 'Dans les coulisses',
    eyebrow: 'Technique',
    h1: 'Ce qui se passe entre la <em>question</em> et la réponse.',
    lede:
      "Le petit schéma sur les écrans montre ce trajet en direct : un point se remplit lorsqu'une étape est terminée, une flèche s'allume pendant qu'on y travaille.",
    diagramAria:
      "Schéma : l'audio du visiteur devient du texte et rejoint la conversation ; de la conversation naît un texte, puis une voix et une image.",
    diagram: {
      caption: 'Visiteur·euse',
      audio: 'Audio',
      vtext: 'Texte',
      konv: 'Conversation',
      text: 'Texte',
      stimme: 'Voix',
      bild: 'Image',
    },
    legendHead: 'Les flèches',
    legend: [
      {
        title: 'Reconnaissance vocale',
        text: "Tant que le bouton est enfoncé, le son est enregistré puis converti en texte.",
      },
      {
        title: 'Entrée dans la conversation',
        text: 'Votre phrase rejoint le fil de la conversation, au même titre que les tours des deux voix.',
      },
      {
        title: 'Modèle de langage',
        text:
          "À partir de la conversation en cours, un modèle de langage écrit la réponse suivante. Il ne voit que le fil et le rôle qu'il joue — le reste, il l'invente à chaque fois.",
      },
      {
        title: 'Synthèse vocale',
        text: 'Le texte devient une voix. Chacun des deux a la sienne.',
      },
      {
        title: "Générateur d'images",
        text:
          "Si une image convient à la pensée, elle est produite en parallèle et apparaît derrière la voix qui parle.",
      },
    ],
    stackHead: 'De quoi c’est fait',
    stack: [
      { k: 'Modèle de langage, voix, images', v: 'OpenAI' },
      { k: 'Reconnaissance vocale', v: 'ElevenLabs' },
      { k: 'Fonctionne sur', v: "un seul ordinateur portable dans la salle d'exposition" },
      { k: 'Langue des deux voix', v: 'allemand, avec réponses dans la langue des visiteurs' },
    ],
    privacyHead: 'Ce qui advient de votre voix',
    privacy: [
      "L'enregistrement n'a lieu que tant que vous maintenez le bouton. Avant et après, le micro n'écoute pas.",
      "Pour la conversion en texte, l'enregistrement est transmis à ElevenLabs aux États-Unis. La transcription qui en résulte y est supprimée immédiatement après le traitement. Les réponses, les voix et les images passent par des services d'OpenAI aux États-Unis.",
      "Aucun des deux prestataires n'utilise ces données pour entraîner ses modèles. Le transfert vers les États-Unis s'appuie sur le Swiss-US Data Privacy Framework ou sur des clauses contractuelles types.",
      "Sur l'ordinateur de la salle, ni le son ni les mots ne sont conservés. Il ne reste rien qui puisse vous être attribué.",
    ],
  },
};

const en = {
  lang: 'en',
  label: 'EN',
  dirName: 'en',
  slugs: { home: '', ideas: 'join-in', tech: 'behind-the-scenes' },
  navLabels: { home: 'The installation', ideas: 'Join in', tech: 'Behind the scenes' },
  otherPages: 'The other two pages',
  colophonTitle: 'About the installation',
  credits:
    'Utobot × Dystobot was built by LLMify AG for the exhibition <em>Künstliche Kreativität</em> at Aargauer Kunsthaus (26 September 2026 – 10 January 2027).',

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: 'The installation',
    h1: 'Two voices that never <em>agree</em>.',
    lede:
      'On the two screens, two artificial voices talk to each other — unscripted, and without end. What they say is made in the moment you hear it.',
    introHead: 'Who is speaking',
    intro:
      'Utobot sees possibility in the technology: more time, wider access, new kinds of beauty. Dystobot sees what gets lost along the way: craft, trust, power gathering in fewer hands. Neither is a cynic or a preacher. They listen to each other — and they disagree.',
    threadHead: 'A fragment',
    thread: [
      {
        who: 'utobot',
        text: 'A student who has never drawn can make her idea visible today. That is not nothing.',
      },
      {
        who: 'dystobot',
        text: 'Visible in whose hand? She is borrowing from people nobody ever asked.',
      },
      {
        who: 'utobot',
        text: 'Then let us argue about the rules, not the tool. The tool is staying.',
      },
    ],
    threadNote:
      'Every few minutes they change the subject — from farming to the concentration of power, from heritage conservation to job losses. Some of their thoughts turn into an image that appears behind them.',
    pressHead: 'You can join in',
    pressSteps: [
      'Press and hold the red button.',
      'Speak while you hold it — a question, an objection, a suggestion.',
      'Let go. They listen, and they answer you.',
    ],
    pressCue: 'Speak now …',
    pressNote:
      'If one of them is mid-sentence, you cut them off — that is intended. There is no need to wait.',
  },

  ideas: {
    title: 'Join in',
    eyebrow: 'Ideas',
    h1: 'Things worth <em>saying</em>.',
    lede:
      'They respond to anything they hear. It gets interesting when you contradict them, or drive a wedge between them.',
    groups: [
      {
        title: 'Speak your language',
        text:
          'They understand English, German, French, Italian and many other languages — and answer in whichever one you use.',
        prompts: ['Can the two of you talk to me in English?', 'Parlez-vous français, tous les deux?'],
      },
      {
        title: 'Take a side',
        text: 'Back one of them — or neither.',
        prompts: [
          'Dystobot, you are far too pessimistic.',
          'Utobot, that sounds like a sales brochure.',
          'You are both missing the point.',
        ],
      },
      {
        title: 'Set the subject',
        text: 'Bring up something they would not have reached on their own.',
        prompts: [
          'What happens to museums if you can paint anything?',
          'Talk about your own mistakes.',
          'What would your grandmother make of this?',
        ],
      },
      {
        title: 'Ask for a picture',
        text: 'Some thoughts turn into an image. You can prompt one.',
        prompts: ['Show me how you picture that.'],
      },
    ],
    note:
      'If nothing intelligible comes through — too quiet, too much room noise — they notice and say so. Just try again, a little closer to the microphone.',
  },

  tech: {
    title: 'Behind the scenes',
    eyebrow: 'Technical',
    h1: 'What happens between <em>question</em> and answer.',
    lede:
      'The small diagram on the screens tracks this path live: a dot fills in when a part is finished, an arrow lights up while it is being worked on.',
    diagramAria:
      'Flow diagram: the visitor’s audio becomes text and joins the conversation; from the conversation comes text, and from that a voice and an image.',
    diagram: {
      caption: 'Visitor',
      audio: 'Audio',
      vtext: 'Text',
      konv: 'Conversation',
      text: 'Text',
      stimme: 'Voice',
      bild: 'Image',
    },
    legendHead: 'The arrows',
    legend: [
      {
        title: 'Speech recognition',
        text: 'While the button is held, the sound is recorded and turned into text.',
      },
      {
        title: 'Into the conversation',
        text: 'Your sentence joins the thread, exactly like the turns of the two voices.',
      },
      {
        title: 'Language model',
        text:
          'From the conversation so far, a language model writes the next reply. It sees only the thread and the role it plays — everything else it invents anew each time.',
      },
      {
        title: 'Speech synthesis',
        text: 'The text becomes a voice. Each of the two has one of their own.',
      },
      {
        title: 'Image generator',
        text:
          'If an image suits the thought, it is made in parallel and appears behind whichever voice is speaking.',
      },
    ],
    stackHead: 'What it is made of',
    stack: [
      { k: 'Language model, voice, images', v: 'OpenAI' },
      { k: 'Speech recognition', v: 'ElevenLabs' },
      { k: 'Runs on', v: 'a single laptop in the exhibition room' },
      { k: 'Language of the two', v: 'German, answering in the visitor’s language' },
    ],
    privacyHead: 'What happens to your voice',
    privacy: [
      'Recording happens only while you hold the button down. Before and after, the microphone is not listening.',
      'To turn it into text, the recording is sent to ElevenLabs in the United States. The transcript created there is deleted immediately after processing. The replies, the voices and the images use OpenAI services in the United States.',
      'Neither provider uses this data to train their models. The transfer to the United States relies on the Swiss-US Data Privacy Framework and on standard contractual clauses.',
      'Nothing is stored on the machine in the exhibition room — neither audio nor words. Nothing remains that could be traced back to you.',
    ],
  },
};

module.exports = { PAGES, locales: [de, fr, en] };

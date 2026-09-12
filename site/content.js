// All visitor-facing copy, in one place. build.js turns this into nine pages
// (three documents × three languages). Editing text here is the whole workflow —
// there is no CMS and no other copy of these strings.
//
// Two house rules for the prose:
//   - No em dashes. Use a colon, a comma or a full stop instead.
//   - Anything naming a topic the bots discuss must match a real brief in
//     prompts/topics/{utobot,dystobot}/ in the installation repo. Inventing a
//     plausible-sounding one puts a promise on the wall the room cannot keep.
//
// Slugs are per-language because a printed URL is read aloud and typed by hand.

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
    'Von der LLMify AG für die Ausstellung <em>Künstliche Kreativität</em> im Aargauer Kunsthaus, 26. September 2026 bis 10. Januar 2027.',

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: 'Die Installation',
    h1: 'Ein Gespräch über die <em>grossen Fragen</em> der künstlichen Intelligenz.',
    lede:
      'Auf den beiden Bildschirmen sprechen zwei künstliche Stimmen miteinander, ohne Skript und ohne Ende. Was sie sagen, entsteht in dem Moment, in dem Sie es hören.',
    introHead: 'Wer hier spricht',
    intro:
      'Utobot sieht in der Technik eine Möglichkeit: mehr Zeit, mehr Zugang, neue Formen von Schönheit. Dystobot sieht, was dabei verloren geht: Handwerk, Vertrauen, Macht, die sich sammelt. Keiner von beiden ist Zyniker oder Prediger. Sie hören einander zu, und sie widersprechen sich.',
    threadHead: 'Ein Ausschnitt',
    thread: [
      {
        who: 'utobot',
        text: 'Wer nie zeichnen gelernt hat, kann eine Bildidee heute sichtbar machen und sie jemandem zeigen. In der Schule ist das ein Einstieg, kein Ersatz.',
      },
      {
        who: 'dystobot',
        text: 'Trainiert wurde auf Arbeiten von Illustratorinnen und Illustratoren, die weder gefragt noch bezahlt wurden. Utobot, das ist zuerst eine Umverteilung.',
      },
      {
        who: 'utobot',
        text: 'Dann ist die Frage, wie vergütet wird, nicht ob das Werkzeug bleibt. Diese Debatte gab es bei der Fotografie schon einmal.',
      },
    ],
    threadNote:
      'Alle paar Minuten wechseln sie das Thema: von personalisierter Bildung zu Machtkonzentration, von neuen Kunstformen zu den ökologischen Kosten. Zu manchen ihrer Gedanken entsteht ein Bild, das hinter ihnen erscheint.',
    pressHead: 'Sie können mitreden',
    pressSteps: [
      'Halten Sie den linken roten Knopf gedrückt.',
      'Sprechen Sie, während er gedrückt bleibt: eine Frage, ein Einwand, ein Vorschlag.',
      'Lassen Sie los. Die beiden hören zu und antworten Ihnen.',
    ],
    pressCue: 'Jetzt sprechen …',
    pressNote:
      'Wenn gerade jemand spricht, unterbrechen Sie ihn. Das ist so vorgesehen, Sie müssen nicht warten.',
    readHead: 'Gesprochenes mitlesen',
    readText:
      'Fällt es schwer, den beiden zu folgen, drücken Sie den rechten roten Knopf: Was gesagt wird, erscheint dann auf den Bildschirmen. Nach einer Weile blendet es sich von selbst wieder aus. Drücken Sie erneut, wenn Sie weiterlesen möchten.',
  },

  ideas: {
    title: 'Mitreden',
    eyebrow: 'Ideen',
    h1: 'Wie Sie <em>mitmachen</em> können.',
    lede:
      'Die beiden reagieren auf alles, was sie hören. Am interessantesten wird es, wenn Sie ihnen widersprechen oder sie auseinanderbringen.',
    groups: [
      {
        title: 'Mischen Sie sich ein',
        text: 'Stellen Sie sich auf eine Seite, oder gegen beide.',
        prompts: [
          'Dystobot, du bist mir zu pessimistisch.',
          'Utobot, das klingt wie eine Werbebroschüre.',
          'Ihr redet beide an der Sache vorbei.',
        ],
      },
      {
        title: 'Sprechen Sie Ihre Sprache',
        text:
          'Sie verstehen Deutsch, Französisch, Italienisch, Englisch und viele weitere Sprachen und antworten in der Sprache, in der Sie sie ansprechen. Auch Dialekt funktioniert oft.',
        prompts: ['Parlez-vous français, tous les deux?', 'Könnt ihr das auf Englisch erklären?'],
      },
      {
        title: 'Fragen Sie nach dem blinden Fleck',
        text: 'Bringen Sie die beiden dazu, die eigene Position zu prüfen statt sie zu wiederholen.',
        prompts: [
          'Wo ist euer blinder Fleck?',
          'Wo könntet ihr euch irren?',
          'Was übersieht ihr beide an dieser Frage?',
        ],
      },
    ],
    note:
      'Wenn nichts Verständliches ankommt, weil es zu leise war oder zu viel Umgebungslärm herrscht, merken die beiden das und sagen es Ihnen. Probieren Sie es dann einfach noch einmal, etwas näher am Mikrofon.',
  },

  tech: {
    title: 'Hinter den Kulissen',
    eyebrow: 'Technik',
    h1: 'Was <em>zwischen</em> Frage und Antwort passiert.',
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
        text: 'Ihr Satz wird Teil des Gesprächsverlaufs, genau wie die Beiträge der beiden Stimmen.',
      },
      {
        title: 'Sprachmodell',
        text:
          'Aus dem bisherigen Gespräch schreibt ein Sprachmodell die nächste Antwort. Es sieht nur den Verlauf und die Rolle, die es spielt. Den Rest erfindet es jedes Mal neu.',
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
      { k: 'Zuhören', v: 'Spracherkennung (Speech-to-Text), von Microsoft, in der EU' },
      { k: 'Antworten', v: 'Grosses Sprachmodell (LLM), von Microsoft, in der EU' },
      { k: 'Bilder', v: 'Bildgenerator (Text-to-Image), von Microsoft, in der EU' },
      { k: 'Stimmen', v: 'Sprachsynthese (Text-to-Speech), von ElevenLabs' },
      {
        k: 'Regie',
        v: 'Ein kleiner Rechner im Ausstellungsraum. Er verbindet die Dienste und bestimmt, wer wann spricht. Gerechnet wird in den Rechenzentren der Anbieter.',
      },
    ],
    privacyHead: 'Was mit Ihrer Stimme geschieht',
    privacy: [
      'Aufgenommen wird nur, solange Sie den Knopf gedrückt halten. Vorher und nachher hört das Mikrofon nicht mit.',
      'Die Umwandlung in Text geschieht bei Microsoft in einem Rechenzentrum in der EU, ebenso die Antworten und die Bilder. Ihre Aufnahme verlässt die EU nicht.',
      'Nur für die Stimmen der beiden wird ein Dienst von ElevenLabs in den USA genutzt. Dorthin geht ausschliesslich der fertige Antworttext, nie eine Aufnahme von Ihnen.',
      'Kein Anbieter verwendet die Daten zum Training seiner Modelle. Die Übermittlung in die USA stützt sich auf das Swiss-US Data Privacy Framework beziehungsweise auf Standardvertragsklauseln.',
      'Ihre Aufnahme wird nirgends abgelegt: weder auf dem Rechner im Ausstellungsraum noch beim Anbieter. Microsoft hält für diesen Dienst ausdrücklich fest, dass weder der Ton noch die daraus gewonnene Abschrift aufbewahrt werden. Es bleibt nichts zurück, was sich Ihnen zuordnen liesse.',
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
    "Par LLMify AG pour l'exposition <em>Künstliche Kreativität</em> à l'Aargauer Kunsthaus, du 26 septembre 2026 au 10 janvier 2027.",

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: "L'installation",
    h1: "Une conversation sur les <em>grandes questions</em> de l'intelligence artificielle.",
    lede:
      "Sur les deux écrans, deux voix artificielles se parlent, sans script et sans fin. Ce qu'elles disent naît à l'instant où vous l'entendez.",
    introHead: 'Qui parle ici',
    intro:
      "Utobot voit dans la technique une possibilité : plus de temps, plus d'accès, de nouvelles formes de beauté. Dystobot voit ce qui se perd en chemin : le métier, la confiance, le pouvoir qui se concentre. Aucun des deux n'est cynique ni prêcheur. Ils s'écoutent, et ils se contredisent.",
    threadHead: 'Un extrait',
    thread: [
      {
        who: 'utobot',
        text: "Quelqu'un qui n'a jamais appris à dessiner peut aujourd'hui rendre une idée visible et la montrer. À l'école, c'est une porte d'entrée, pas un remplacement.",
      },
      {
        who: 'dystobot',
        text: "L'entraînement s'est fait sur le travail d'illustratrices et d'illustrateurs qui n'ont été ni consultés ni payés. Utobot, c'est d'abord une redistribution.",
      },
      {
        who: 'utobot',
        text: "Alors la question est de savoir comment rémunérer, pas si l'outil restera. Ce débat a déjà eu lieu pour la photographie.",
      },
    ],
    threadNote:
      "Toutes les quelques minutes, ils changent de sujet : de l'éducation personnalisée à la concentration du pouvoir, des nouvelles formes d'art au coût écologique. Certaines de leurs pensées donnent naissance à une image qui apparaît derrière eux.",
    pressHead: 'Vous pouvez participer',
    pressSteps: [
      'Maintenez le bouton rouge de gauche enfoncé.',
      "Parlez pendant qu'il reste enfoncé : une question, une objection, une proposition.",
      'Relâchez. Ils vous écoutent et vous répondent.',
    ],
    pressCue: 'Parlez maintenant …',
    pressNote:
      "Si quelqu'un parle à ce moment-là, vous l'interrompez. C'est prévu ainsi, vous n'avez pas à attendre.",
    readHead: 'Lire ce qui se dit',
    readText:
      "Si vous avez du mal à les suivre, appuyez sur le bouton rouge de droite : ce qui se dit apparaît alors sur les écrans. L'affichage s'arrête de lui-même au bout d'un moment. Appuyez à nouveau pour continuer à lire.",
  },

  ideas: {
    title: 'Participer',
    eyebrow: 'Idées',
    h1: 'Comment <em>participer</em>.',
    lede:
      "Ils réagissent à tout ce qu'ils entendent. Cela devient intéressant quand vous les contredisez ou que vous les séparez.",
    groups: [
      {
        title: 'Intervenez',
        text: "Rangez-vous d'un côté, ou contre les deux.",
        prompts: [
          'Dystobot, tu es bien trop pessimiste.',
          "Utobot, on dirait une brochure publicitaire.",
          'Vous passez tous les deux à côté du sujet.',
        ],
      },
      {
        title: 'Parlez votre langue',
        text:
          "Ils comprennent le français, l'allemand, l'italien, l'anglais et bien d'autres langues, et répondent dans celle que vous employez.",
        prompts: ['Parlez-vous français, tous les deux ?', 'Pouvez-vous expliquer cela en anglais ?'],
      },
      {
        title: "Cherchez l'angle mort",
        text: 'Amenez-les à examiner leur propre position au lieu de la répéter.',
        prompts: [
          "Où est votre angle mort ?",
          'Où pourriez-vous vous tromper ?',
          "Qu'est-ce que vous manquez tous les deux dans cette question ?",
        ],
      },
    ],
    note:
      "Si rien de compréhensible n'arrive, parce que c'était trop bas ou qu'il y a trop de bruit autour, ils s'en aperçoivent et vous le disent. Réessayez simplement, un peu plus près du micro.",
  },

  tech: {
    title: 'Dans les coulisses',
    eyebrow: 'Technique',
    h1: 'Ce qui se passe <em>entre</em> la question et la réponse.',
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
        text: 'Tant que le bouton est enfoncé, le son est enregistré puis converti en texte.',
      },
      {
        title: 'Entrée dans la conversation',
        text: 'Votre phrase rejoint le fil de la conversation, au même titre que les tours des deux voix.',
      },
      {
        title: 'Modèle de langage',
        text:
          "À partir de la conversation en cours, un modèle de langage écrit la réponse suivante. Il ne voit que le fil et le rôle qu'il joue. Le reste, il l'invente à chaque fois.",
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
      { k: 'Écoute', v: 'Reconnaissance vocale (speech-to-text), par Microsoft, dans l’UE' },
      { k: 'Réponses', v: 'Grand modèle de langage (LLM), par Microsoft, dans l’UE' },
      { k: 'Images', v: "Générateur d'images (text-to-image), par Microsoft, dans l’UE" },
      { k: 'Voix', v: 'Synthèse vocale (text-to-speech), par ElevenLabs' },
      {
        k: 'Régie',
        v: "Un petit ordinateur dans la salle. Il relie les services et décide qui parle quand. Les calculs, eux, ont lieu dans les centres de données des prestataires.",
      },
    ],
    privacyHead: 'Ce qui advient de votre voix',
    privacy: [
      "L'enregistrement n'a lieu que tant que vous maintenez le bouton. Avant et après, le micro n'écoute pas.",
      "La conversion en texte a lieu chez Microsoft, dans un centre de données situé dans l'UE, tout comme les réponses et les images. Votre enregistrement ne quitte pas l'UE.",
      "Seules les voix des deux passent par un service d'ElevenLabs aux États-Unis. Seul le texte de réponse y est transmis, jamais un enregistrement de votre voix.",
      "Aucun prestataire n'utilise ces données pour entraîner ses modèles. Le transfert vers les États-Unis s'appuie sur le Swiss-US Data Privacy Framework ou sur des clauses contractuelles types.",
      "Votre enregistrement n'est conservé nulle part : ni sur l'ordinateur de la salle, ni chez le prestataire. Microsoft indique expressément que, pour ce service, ni le son ni la transcription qui en est tirée ne sont conservés. Il ne reste rien qui puisse vous être attribué.",
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
    'By LLMify AG for the exhibition <em>Künstliche Kreativität</em> at Aargauer Kunsthaus, 26 September 2026 to 10 January 2027.',

  home: {
    title: 'Utobot × Dystobot',
    eyebrow: 'The installation',
    h1: 'A conversation about the <em>big questions</em> of artificial intelligence.',
    lede:
      'On the two screens, two artificial voices talk to each other, unscripted and without end. What they say is made in the moment you hear it.',
    introHead: 'Who is speaking',
    intro:
      'Utobot sees possibility in the technology: more time, wider access, new kinds of beauty. Dystobot sees what gets lost along the way: craft, trust, power gathering in fewer hands. Neither is a cynic or a preacher. They listen to each other, and they disagree.',
    threadHead: 'A fragment',
    thread: [
      {
        who: 'utobot',
        text: 'Someone who never learned to draw can make a visual idea concrete today and show it to a room. In a classroom that is a way in, not a replacement.',
      },
      {
        who: 'dystobot',
        text: 'The training used work by illustrators who were neither asked nor paid. Utobot, that is redistribution before it is anything else.',
      },
      {
        who: 'utobot',
        text: 'Then the question is how people get paid, not whether the tool stays. We had this argument about photography already.',
      },
    ],
    threadNote:
      'Every few minutes they change the subject: from personalised education to the concentration of power, from new art forms to the ecological bill. Some of their thoughts turn into an image that appears behind them.',
    pressHead: 'You can join in',
    pressSteps: [
      'Press and hold the left red button.',
      'Speak while you hold it: a question, an objection, a suggestion.',
      'Let go. They listen, and they answer you.',
    ],
    pressCue: 'Speak now …',
    pressNote:
      'If one of them is mid-sentence, you cut them off. That is intended, there is no need to wait.',
    readHead: 'Read along',
    readText:
      'If they are hard to follow, press the right red button: what is being said then appears on the screens. It fades out again after a while. Press again if you want to keep reading.',
  },

  ideas: {
    title: 'Join in',
    eyebrow: 'Ideas',
    h1: 'How to <em>join in</em>.',
    lede:
      'They respond to anything they hear. It gets interesting when you contradict them, or drive a wedge between them.',
    groups: [
      {
        title: 'Interrupt them',
        text: 'Back one of them, or neither.',
        prompts: [
          'Dystobot, you are far too pessimistic.',
          'Utobot, that sounds like a sales brochure.',
          'You are both missing the point.',
        ],
      },
      {
        title: 'Speak your language',
        text:
          'They understand English, German, French, Italian and many other languages, and answer in whichever one you use.',
        prompts: ['Can the two of you talk to me in English?', 'Parlez-vous français, tous les deux?'],
      },
      {
        title: 'Ask for the blind spot',
        text: 'Push them to examine their own position instead of restating it.',
        prompts: [
          'Where is your blind spot?',
          'Where could you be wrong?',
          'What are you both missing about this?',
        ],
      },
    ],
    note:
      'If nothing intelligible comes through, because it was too quiet or there is too much room noise, they notice and say so. Just try again, a little closer to the microphone.',
  },

  tech: {
    title: 'Behind the scenes',
    eyebrow: 'Technical',
    h1: 'What happens <em>between</em> question and answer.',
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
          'From the conversation so far, a language model writes the next reply. It sees only the thread and the role it plays. Everything else it invents anew each time.',
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
      { k: 'Listening', v: 'Speech recognition (speech-to-text), by Microsoft, in the EU' },
      { k: 'Replies', v: 'Large language model (LLM), by Microsoft, in the EU' },
      { k: 'Images', v: 'Image generator (text-to-image), by Microsoft, in the EU' },
      { k: 'Voices', v: 'Speech synthesis (text-to-speech), by ElevenLabs' },
      {
        k: 'Direction',
        v: 'A small computer in the exhibition room. It connects the services and decides who speaks when. The computing itself happens in the providers’ data centres.',
      },
    ],
    privacyHead: 'What happens to your voice',
    privacy: [
      'Recording happens only while you hold the button down. Before and after, the microphone is not listening.',
      'Turning it into text happens at Microsoft, in a data centre inside the EU, as do the replies and the images. Your recording does not leave the EU.',
      'Only the voices of the two use a service from ElevenLabs in the United States. Only the finished reply text is sent there, never a recording of you.',
      'No provider uses this data to train their models. The transfer to the United States relies on the Swiss-US Data Privacy Framework and on standard contractual clauses.',
      'Your recording is not kept anywhere: not on the machine in the exhibition room, and not at the provider either. Microsoft states explicitly that for this service neither the audio nor the transcript derived from it is retained. Nothing remains that could be traced back to you.',
    ],
  },
};

module.exports = { PAGES, locales: [de, fr, en] };

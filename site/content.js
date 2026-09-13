// All visitor-facing copy, in one place. build.js turns this into six pages
// (two documents × three languages). Editing text here is the whole workflow —
// there is no CMS and no other copy of these strings.
//
// The German text is the two printed handouts, verbatim:
//   20260910 Handout Utobot-Dystobot - Basisinformationen  → home
//   20260912 Handout Utobot-Dystobot - Funktionsweise      → tech
// French and English are translations of those. Change the handout, then
// change this file; never the other way round.
//
// Slugs are per-language because a printed URL is read aloud and typed by hand.
// French lives at the site root and is listed first in the language switcher.

const PAGES = ['home', 'tech'];

const fr = {
  lang: 'fr',
  label: 'FR',
  dirName: '', // French is the default; it lives at the site root
  slugs: { home: '', tech: 'fonctionnement' },
  navLabels: { home: "L'installation", tech: 'Fonctionnement' },

  home: {
    title: 'Utobot × Dystobot',
    h1: "Une conversation sur les <em>grandes questions</em> de l'intelligence artificielle",
    lede:
      "Les deux voicebots «Utobot» et «Dystobot» parlent de différents aspects de l'IA : de la créativité à la guerre, en passant par la médecine, la politique, le travail et l'environnement. L'un est plutôt optimiste, l'autre plutôt critique. De temps à autre, ils produisent aussi des images sur les sujets abordés.",
    sections: [
      {
        head: 'Mêlez-vous à la conversation !',
        paras: [
          'Vous avez une question ou une objection ? Vous aimeriez que les bots changent de sujet ?',
          'Interrompez les bots à tout moment en maintenant le bouton rouge de gauche enfoncé et en parlant dans le micro. Les bots vous écoutent. Quand vous avez fini de parler, relâchez le bouton rouge.',
          "Vous pouvez aussi parler aux bots dans une autre langue que l'allemand. Ils vous répondront dans la langue choisie.",
        ],
      },
      {
        head: 'Afficher les textes parlés',
        paras: [
          "Si vous avez du mal à comprendre ce qui est dit, vous pouvez afficher les textes. Appuyez pour cela sur le bouton rouge de droite. Les textes apparaissent sur les écrans. Au bout d'un moment, l'affichage s'arrête de lui-même. Si vous souhaitez continuer à lire, appuyez simplement à nouveau sur le bouton rouge de droite.",
        ],
      },
    ],
  },

  tech: {
    title: 'Fonctionnement',
    h1: '<em>Fonctionnement</em>',
    lede:
      'Le petit schéma sur les écrans montre, par ses flèches clignotantes, où en sont les bots dans leur processus.',
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
    zoomOpen: 'Agrandir',
    zoomClose: 'Fermer',
    legend: [
      {
        title: 'Reconnaissance vocale',
        text: 'Tant que vous maintenez le bouton rouge de gauche enfoncé, vos paroles sont enregistrées et converties en texte.',
      },
      {
        title: 'Entrée dans la conversation',
        text: "Le texte que vous avez prononcé rejoint le fil de la conversation, et les deux bots y réagiront. Les deux premières étapes ne s'affichent que lorsque quelqu'un parle aux bots.",
      },
      {
        title: 'Modèle de langage',
        text: 'Le bot rédige la prochaine intervention. Elle repose sur la conversation jusque-là et sur le rôle qui lui a été attribué. Le contenu est recréé à chaque fois.',
      },
      {
        title: 'Synthèse vocale',
        text: 'Le texte écrit est converti en parole.',
      },
      {
        title: "Générateur d'images",
        text: 'De temps à autre, les bots génèrent des images sur les sujets de la conversation.',
      },
    ],
    privacyHead: 'Que deviennent les enregistrements vocaux ?',
    privacy: [
      "L'enregistrement n'a lieu que tant que vous maintenez le bouton rouge enfoncé ; sinon, le micro n'écoute pas.",
      "La conversion en texte est assurée par Microsoft, dans un centre de données situé dans l'UE. C'est là aussi que naissent les réponses des bots et les images. Votre voix ne quitte donc pas l'UE, et Microsoft ne conserve ni l'enregistrement ni le texte qui en est tiré.",
      "Une seule étape passe par les États-Unis : les voix des deux bots viennent d'ElevenLabs. Seul le texte des bots y est transmis, jamais un enregistrement de vous. Ce transfert est couvert par les garanties contractuelles exigées par le droit de la protection des données.",
      "Aucun prestataire n'utilise ces données pour entraîner ses modèles.",
      "Sur l'ordinateur de la salle d'exposition, ni le son ni les paroles ne sont enregistrés. Il ne reste rien qui puisse vous être attribué.",
    ],
    stackHead: 'Composants du système',
    stack: [
      { k: 'Textes', v: 'LLM (grand modèle de langage) GPT-5.6 d’OpenAI, exploité via Azure' },
      { k: 'Voix', v: 'Text-to-Speech (synthèse vocale) Flash v2.5 d’ElevenLabs' },
      { k: 'Images', v: 'Text-to-Image (générateur d’images) GPT-Image 1.5 d’OpenAI, exploité via Azure' },
      { k: 'Reconnaissance vocale', v: 'Speech-to-Text (reconnaissance vocale) Azure AI Speech de Microsoft' },
      {
        k: 'Régie',
        v: 'Un MacBook Pro M1. Il relie les différents services d’IA entre eux et décide qui parle quand. Les calculs proprement dits ont lieu dans les centres de données des prestataires concernés.',
      },
    ],
  },
};

const en = {
  lang: 'en',
  label: 'EN',
  dirName: 'en',
  slugs: { home: '', tech: 'how-it-works' },
  navLabels: { home: 'The installation', tech: 'How it works' },

  home: {
    title: 'Utobot × Dystobot',
    h1: 'A conversation about the <em>big questions</em> of artificial intelligence',
    lede:
      'The two voicebots "Utobot" and "Dystobot" talk about various aspects of AI: from creativity to medicine, politics, jobs and the environment, all the way to warfare. One is more optimistic, the other more critical. Every so often they also produce images on the topics under discussion.',
    sections: [
      {
        head: 'Join in!',
        paras: [
          'Do you have a question or an objection? Would you like the bots to change the subject?',
          'Interrupt the bots at any time by holding down the left red button and speaking into the microphone. The bots are listening to you. When you have finished speaking, let go of the red button.',
          'You can also speak to the bots in a language other than German. They will answer you in the language you chose.',
        ],
      },
      {
        head: 'Show the spoken text',
        paras: [
          'If you find the spoken text hard to understand, you can have it displayed. To do so, press the right red button. The text appears on the screens. After a while the display switches off again by itself. If you would like to keep reading along, simply press the right red button again.',
        ],
      },
    ],
  },

  tech: {
    title: 'How it works',
    h1: 'How it <em>works</em>',
    lede:
      'The small diagram on the screens shows, by its blinking arrows, where the bots currently are in their process.',
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
    zoomOpen: 'Enlarge',
    zoomClose: 'Close',
    legend: [
      {
        title: 'Speech recognition',
        text: 'As long as you hold down the left red button, what you say is recorded and converted into text.',
      },
      {
        title: 'Into the conversation',
        text: 'The text you spoke becomes part of the conversation, and the two bots will respond to it. The first two steps are only shown when someone is speaking to the bots.',
      },
      {
        title: 'Language model',
        text: 'The bot composes its next statement. It is based on the conversation so far and on the role the bot has been given. The content is created afresh every time.',
      },
      {
        title: 'Speech synthesis',
        text: 'The written text is converted into speech.',
      },
      {
        title: 'Image generator',
        text: 'Every so often the bots generate images on the topics of the conversation.',
      },
    ],
    privacyHead: 'What happens to the voice recordings?',
    privacy: [
      'Recording happens only while you hold the red button down; otherwise the microphone is not listening.',
      'Turning it into text is done by Microsoft, in a data centre inside the EU. The bots’ replies and the images are made there too. So your voice does not leave the EU, and Microsoft keeps neither the recording nor the text derived from it.',
      'Exactly one step goes to the United States: the voices of the two bots come from ElevenLabs. Only the bots’ text is sent there, never a recording of you. That transfer is covered by the contractual safeguards data protection law requires for it.',
      'No provider uses this data to train its models.',
      'On the computer in the exhibition room, neither audio nor wording is stored. Nothing remains that could be traced back to you.',
    ],
    stackHead: 'Components of the system',
    stack: [
      { k: 'Text', v: 'LLM (large language model) GPT-5.6 by OpenAI, run via Azure' },
      { k: 'Voices', v: 'Text-to-speech (speech synthesis) Flash v2.5 by ElevenLabs' },
      { k: 'Images', v: 'Text-to-image (image generator) GPT-Image 1.5 by OpenAI, run via Azure' },
      { k: 'Speech recognition', v: 'Speech-to-text (speech recognition) Azure AI Speech by Microsoft' },
      {
        k: 'Direction',
        v: 'A MacBook Pro M1. It links the various AI services together and decides who speaks when. The actual computing happens in the data centres of the respective providers.',
      },
    ],
  },
};

const de = {
  lang: 'de',
  label: 'DE',
  dirName: 'de',
  slugs: { home: '', tech: 'funktionsweise' },
  navLabels: { home: 'Die Installation', tech: 'Funktionsweise' },

  home: {
    title: 'Utobot × Dystobot',
    h1: 'Ein Gespräch über <em>grosse Fragen</em> rund um künstliche Intelligenz',
    lede:
      'Die beiden Voicebots "Utobot" und "Dystobot" sprechen über verschiedene Aspekte rund um KI: von Kreativität über Medizin, Politik, Jobs und Umwelt bis zur Kriegsführung. Der eine optimistischer, der andere kritischer. In unregelmässigen Abständen erzeugen sie auch Bilder zu den besprochenen Themen.',
    sections: [
      {
        head: 'Mischen Sie sich ein!',
        paras: [
          'Haben Sie eine Frage oder einen Einwand? Möchten Sie, dass die Bots das Thema wechseln?',
          'Unterbrechen Sie die Bots jederzeit, indem Sie den linken roten Knopf gedrückt halten und ins Mikrofon sprechen. Die Bots hören Ihnen zu. Wenn Sie fertig gesprochen haben, lassen Sie den roten Knopf wieder los.',
          'Sie können auch in einer anderen Sprache als Deutsch mit den Bots sprechen. Sie werden Ihnen in der gewählten Sprache antworten.',
        ],
      },
      {
        head: 'Gesprochene Texte anzeigen',
        paras: [
          'Wenn Sie Mühe haben, die gesprochenen Texte zu verstehen, können Sie sie anzeigen lassen. Drücken Sie dazu auf den rechten roten Knopf. Die Texte erscheinen auf den Bildschirmen. Nach einiger Zeit wird die Anzeige der Texte automatisch wieder beendet. Wenn Sie weiterhin mitlesen möchten, drücken Sie einfach erneut auf den rechten roten Knopf.',
        ],
      },
    ],
  },

  tech: {
    title: 'Funktionsweise',
    h1: '<em>Funktionsweise</em>',
    lede:
      'Das kleine Diagramm auf den Bildschirmen zeigt anhand der blinkenden Pfeile, wo die Bots in ihrem Prozess gerade stehen.',
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
    zoomOpen: 'Vergrössern',
    zoomClose: 'Schliessen',
    legend: [
      {
        title: 'Spracherkennung',
        text: 'Solange Sie den linken roten Knopf gedrückt halten, werden Ihre Aussagen aufgenommen und in Text umgewandelt.',
      },
      {
        title: 'Einschleusen ins Gespräch',
        text: 'Der von Ihnen gesprochene Text wird Teil des Gesprächsverlaufs, die beiden Bots werden darauf reagieren. Die ersten beiden Schritte werden nur dann eingeblendet, wenn jemand mit den Bots spricht.',
      },
      {
        title: 'Sprachmodell',
        text: 'Der Bot verfasst die nächste Aussage. Sie basiert auf dem bisherigen Gesprächsverlauf und auf der Rolle, die ihm zugeschrieben wurde. Der Inhalt wird immer wieder neu gebildet.',
      },
      {
        title: 'Sprachsynthese',
        text: 'Der geschriebene Text wird in gesprochenen Text umgewandelt.',
      },
      {
        title: 'Bildgenerator',
        text: 'Die Bots generieren in unregelmässigen Abständen Bilder zu den Gesprächsthemen.',
      },
    ],
    privacyHead: 'Was geschieht mit den Stimmaufnahmen?',
    privacy: [
      'Aufgenommen wird nur, solange Sie den roten Knopf gedrückt halten, sonst hört das Mikrofon nicht mit.',
      'Die Umwandlung in Text übernimmt Microsoft, in einem Rechenzentrum in der EU. Dort entstehen auch die Antworten der Bots und die Bilder. Ihre Stimme verlässt die EU also nicht, und Microsoft bewahrt weder die Aufnahme noch den Text daraus auf.',
      'In die USA geht nur ein Schritt: die Stimmen der beiden Bots stammen von ElevenLabs. Übermittelt wird dorthin ausschliesslich der Text der Bots, nie eine Aufnahme von Ihnen. Für diese Übermittlung gelten die vertraglichen Garantien, die das Datenschutzrecht dafür verlangt.',
      'Kein Anbieter verwendet die Daten, um seine Modelle zu trainieren.',
      'Auf dem Rechner im Ausstellungsraum wird weder Ton noch Wortlaut gespeichert. Es bleibt nichts zurück, was sich Ihnen zuordnen liesse.',
    ],
    stackHead: 'Komponenten des Systems',
    stack: [
      { k: 'Texte', v: 'LLM (grosses Sprachmodell) GPT-5.6 von OpenAI, betrieben über Azure' },
      { k: 'Stimmen', v: 'Text-to-Speech (Sprachsynthese) Flash v2.5 von ElevenLabs' },
      { k: 'Bilder', v: 'Text-to-Image (Bildgenerator) GPT-Image 1.5 von OpenAI, betrieben über Azure' },
      { k: 'Spracherkennung', v: 'Speech-to-Text (Spracherkennung) Azure AI Speech von Microsoft' },
      {
        k: 'Regie',
        v: 'Ein Macbook Pro M1. Es verknüpft die verschiedenen KI-Dienste miteinander und gibt vor, wer wann spricht. Die eigentlichen Rechenvorgänge geschehen in den Rechenzentren der entsprechenden Anbieter.',
      },
    ],
  },
};

// Paths that were printed or encoded before the site was restructured (German
// at the root, three documents). Each becomes a stub page that forwards to
// where the content lives now, so an old QR code or a typed URL still lands.
const REDIRECTS = {
  'hinter-den-kulissen': 'de/funktionsweise',
  ideen: 'de',
  fr: '',
  'fr/coulisses': 'fonctionnement',
  'fr/idees': '',
  'en/behind-the-scenes': 'en/how-it-works',
  'en/join-in': 'en',
};

module.exports = { PAGES, locales: [fr, en, de], REDIRECTS };

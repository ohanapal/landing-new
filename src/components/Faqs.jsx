import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is OhanaPal?',
      answer:
        'OhanaPal is an AI-powered platform designed to empower neurodivergent individuals by providing tools for daily life management, skill-building, and social connection.',
    },
    {
      question: 'Who can use OhanaPal?',
      answer:
        'OhanaPal is built for neurodivergent individuals, caregivers, and families seeking tools to promote independence and ease daily challenges.',
    },
    {
      question: 'How does OhanaPal support independence?',
      answer:
        'Our platform offers features like task reminders, scheduling tools, budgeting assistance, and curated marketplaces to help users take control of their daily lives.',
    },
  ],
  [
    {
      question: 'Is OhanaPal only for neurodivergent individuals?',
      answer:
        'While OhanaPal is designed with neurodivergent users in mind, caregivers and families can also use the app to coordinate schedules and provide support.',
    },
    {
      question: 'Is OhanaPal available in my country?',
      answer:
        'OhanaPal is launching globally! Check our website for updates on availability in your region.',
    },
    {
      question: 'Can caregivers use OhanaPal?',
      answer:
        'Yes, caregivers can join OhanaPal to help manage schedules, track progress, and provide support without overburdening themselves.',
    },
  ],
  [
    {
      question: 'When will the app be available?',
      answer:
        'OhanaPal is currently in development. Join our waitlist to be the first to know when it launches!',
    },
    {
      question: 'Will OhanaPal work on my device?',
      answer:
        'OhanaPal will be available for both iOS and Android devices, with a web platform coming soon.',
    },
    {
      question: 'How much does OhanaPal cost?',
      answer:
        'We offer a range of plans, from free access to premium subscriptions, depending on the level of support and features you need.',
    },
  ],
];


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:contact@ohanapal.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

type InfoProps = {
  title: string
  paragraphs: string[]
}

const InfoTemplate = ({ title, paragraphs }: InfoProps) => (
  <div className="page">
    <section className="section narrow">
      <p className="eyebrow">FitWorkout</p>
      <h1>{title}</h1>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  </div>
)

export const PrivacyPage = () => (
  <InfoTemplate
    title="Privacy commitments"
    paragraphs={[
      'We collect minimal analytics to guide product improvements. Personal workout data remains on your device unless you opt-in for cloud sync.',
      'Nutrition notes and favorites never leave your account. We do not sell or share data with advertisers.',
      'Reach out to privacy@fitworkout.com for deletion requests or policy questions.',
    ]}
  />
)

export const TermsPage = () => (
  <InfoTemplate
    title="Terms of use"
    paragraphs={[
      'FitWorkout content is designed for educational purposes. Consult your physician before starting a new routine.',
      'Membership grants you access to curated programs; redistribution of videos or recipes is prohibited without written consent.',
      'By using the platform you agree to receive essential service communications related to account management.',
    ]}
  />
)

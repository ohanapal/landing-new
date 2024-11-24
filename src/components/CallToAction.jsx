import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Join the Waitlist Today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It only takes 30 seconds to sign up. Be the first to experience OhanaPal and redefine independence with personalized AI-powered tools. Sign up now to stay updated and unlock exclusive early access benefits.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contact" className="hidden lg:block">
              Join the Waitlist
            </Button>
          </div>
          
        </div>
      </Container>
    </section>
  )
}

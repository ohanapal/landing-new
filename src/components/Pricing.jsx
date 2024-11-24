'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Pricing() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://api.ohanapay.app/api/1.1/wf/add-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast.success('You joined the waitlist!')
        setEmail('') // Clear the input after successful submission
      } else {
        const errorData = await response.json()
        toast.error(`Failed to join: ${errorData.message || 'Unknown error'}`)
      }
    } catch (error) {
      toast.error(`Something went wrong: ${error.message}`)
    } finally {
      setLoading(false) // Reset loading state after API call completes
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="waitlist-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="waitlist-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Be the first to experience OhanaPal
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Join our waitlist today and get exclusive early access to the tools
            designed to empower neurodivergent individuals and their caregivers.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-base"
            />
            <button
              type="submit"
              disabled={loading}
              className={`rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-500 text-base ${
                loading ? 'bg-cyan-300' : 'bg-cyan-500 hover:bg-cyan-600'
              }`}
              style={{
                height: '48px',
                minWidth: '160px',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Loading...' : 'Join the Waitlist'}
            </button>
          </form>
        </div>
      </Container>
      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  )
}

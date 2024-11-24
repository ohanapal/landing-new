'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Life-changing support.',
    body: 'OhanaPal has completely transformed how I manage my daily tasks. I feel more independent and confident than ever before.',
    author: 'EmpoweredUser',
    rating: 5,
  },
  {
    title: 'A true game-changer.',
    body: 'I’ve struggled with organizing my life for years, but OhanaPal made it so simple. The task reminders and planning tools are a lifesaver!',
    author: 'GratefulParent',
    rating: 5,
  },
  {
    title: 'Finally, something that works!',
    body: 'I’ve tried so many apps, but none were tailored to neurodivergent needs like OhanaPal. It’s intuitive, supportive, and makes my day manageable.',
    author: 'HappyCaregiver',
    rating: 5,
  },
  {
    title: 'A burden lifted.',
    body: 'As a caregiver, OhanaPal has given me peace of mind. I can step back, knowing my loved one has tools to thrive independently.',
    author: 'CaregiverMom',
    rating: 5,
  },
  {
    title: 'A platform built for me.',
    body: 'For the first time, I feel seen and supported. OhanaPal’s tools make managing my time and goals easier than ever.',
    author: 'CreativeMind',
    rating: 5,
  },
  {
    title: 'Freedom like never before.',
    body: 'OhanaPal has given me the confidence to manage my schedule and even start a freelance career. I feel unstoppable now.',
    author: 'FutureEntrepreneur',
    rating: 5,
  },
  {
    title: 'Incredible and empowering.',
    body: 'I’ve gained so much independence since using OhanaPal. The gamified features make everyday achievements feel rewarding.',
    author: 'InspiredUser',
    rating: 5,
  },
  {
    title: 'My son loves it!',
    body: 'OhanaPal has been a game-changer for my neurodivergent son. He feels more in control of his life, and I’ve seen his confidence grow.',
    author: 'SupportiveParent',
    rating: 5,
  },
  {
    title: 'Perfect for work-life balance.',
    body: 'I’ve been able to focus more on my passions while OhanaPal handles the daily grind. It’s like having a personal assistant!',
    author: 'FreelancerPro',
    rating: 5,
  },
  {
    title: 'Independence, finally!',
    body: 'I’ve always felt overwhelmed by daily tasks. OhanaPal has changed that completely. It’s my go-to app for everything.',
    author: 'ThrivingNow',
    rating: 5,
  },
  {
    title: 'A dream come true.',
    body: 'With OhanaPal’s help, I’ve launched my online art store. The app handled everything from scheduling to marketing!',
    author: 'CreativeArtist',
    rating: 5,
  },
  {
    title: 'The support we’ve been waiting for.',
    body: 'OhanaPal isn’t just a tool; it’s a community. I feel connected and supported in ways I never thought possible.',
    author: 'HopefulParent',
    rating: 5,
  },
  {
    title: 'Empowerment in my pocket.',
    body: 'I’ve always struggled to manage my time, but OhanaPal’s tools have helped me stay on track and accomplish more than I ever thought possible.',
    author: 'TimeMaster',
    rating: 5,
  },
  {
    title: 'A lifeline for caregivers.',
    body: 'OhanaPal has made my role as a caregiver so much easier. I can step back without worrying because I know my loved one is supported.',
    author: 'CaringSibling',
    rating: 5,
  },
  {
    title: 'Highly recommended!',
    body: 'If you’re neurodivergent or know someone who is, you need OhanaPal. It’s life-changing for everyone involved.',
    author: 'AdvocateForAll',
    rating: 5,
  },
];


function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({ reviews, className, reviewClassName, msPerPixel = 0 }) {
  let columnRef = useRef(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
  <h2
    id="reviews-title"
    className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
  >
    Transforming their life with OhanaPal.
  </h2>
  <p className="mt-2 text-lg text-gray-600 sm:text-center">
    Users have unlocked their potential and gained independence in the last 30 days.
  </p>
  <ReviewGrid />
</Container>

    </section>
  )
}

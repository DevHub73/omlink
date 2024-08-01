
import { db } from '@/lib/db'
export const createEvent = async (data) => {
  try {
    const event = await db.event.create({
      data: {
        title: data.title,
        description: data?.description,
        time: data.time,
        correlationUsers: {
          create: data.correlationUserIds.map(userId => ({
            user: {
              connect: { id: userId }
            }
          }))
        },
      },
    })
    return event
  } catch (error) {
    console.error('Error creating event:', error)
    throw new Error('Unable to create event')
  }
}


export const getAllEvents = async () => {
  try {
    const events = await db.event.findMany({
      include: {
        correlationUsers: {
          include: {
            user: true
          }
        },
        attendees: {
          include: {
            user: true
          }
        }
      },
    })
    return events
  } catch (error) {
    console.error('Error fetching events:', error)
    throw new Error('Unable to fetch events')
  }
}

import { db } from '@/lib/db'


export const createProject = async (data) => {
  try {
    const project = await db.project.create({
      data: {
        title: data.title,
        description: data?.description,
        price: data.price,
        image: data?.image,
        status: data.status || 'OPEN',
      },
    })
    return project
  } catch (error) {
    console.error('Error creating project:', error)
    throw new Error('Unable to create project')
  }
}


export const getUserProjects = async (userId) => {
  try {
    const userProfile = await db.userProfile.findUnique({
      where: { userId },
      include: {
        projects: {
          include: {
            project: true
          }
        }
      }
    })

    if (!userProfile) {
      throw new Error('User not found')
    }

    const projects = userProfile.projects.map(pm => pm.project)
    return projects
  } catch (error) {
    console.error('Error fetching user projects:', error)
    throw new Error('Unable to fetch user projects')
  }
}



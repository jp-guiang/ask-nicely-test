import axios from 'axios'
import type { NotificationModel } from '@/models/notification-model'

export async function getNotifications(): Promise<NotificationModel[]> {
  try {
    const response = await axios.get(
      'https://testau.asknice.ly/api/v1/candidate-test/mock-notifications'
    )
    const data: NotificationModel[] = response.data.data
    return data
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

export async function createToDo(notification) {
  const body = { id: notification.id, action: 'TODO' }

  try {
    const response = await axios.post(
      'https://testau.asknice.ly/api/v1/candidate-test/mock-action',
      body,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return response
  } catch (error) {
    console.error('Error', error)
  }
}

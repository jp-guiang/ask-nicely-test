import axios from 'axios'
import type { NotificationModel } from '@/models/notification-model'
import { useToast } from 'vue-toastification'

const toast = useToast()
export async function getNotifications(): Promise<NotificationModel[]> {
  try {
    const response = await axios.get(
      'https://testau.asknice.ly/api/v1/candidate-test/mock-notifications'
    )
    const data: NotificationModel[] = response.data.data
    return data
  } catch (error) {
    console.error('Error', error)
    toast.error('Could not get notifications')
    return []
  }
}

export async function createToDo(notification: NotificationModel) {
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
    toast.success('Created To Do!')
    return response
  } catch (error) {
    console.error('Error', error)
    toast.error('Could not create to do')
  }
}

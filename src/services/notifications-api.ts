import axios from 'axios'
import type { NotificationModel } from '@/models/notification-model'

export async function getNotifications(): Promise<NotificationModel[]> {
  try {
    const response = await axios.get(
      'https://testau.asknice.ly/api/v1/candidate-test/mock-notifications'
    )
    console.log(response.data)
    const data: NotificationModel[] = response.data
    return data
  } catch (error) {
    console.error('Error', error)
    return []
  }
}

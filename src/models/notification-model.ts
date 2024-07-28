import { AvailableActions } from '@/enums/available-actions-enum'

export interface NotificationModel {
  id: string
  title: string
  preview_text: string
  full_text: string
  author: string
  created: string
  read: boolean
  available_actions: AvailableActions[]
}

import { describe, it, expect } from 'vitest'
import { getNotifications } from '../../services/notifications-api'
import { notificationResponse } from './mockNotifications'

describe('Retrieving notifications', () => {
  it('Should get the notifications from the AskNicely API', async () => {
    const expected = notificationResponse
    const response = await getNotifications()
    expect(response).toEqual(expected)
  })
})

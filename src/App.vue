<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getNotifications } from './services/notifications-api'
import type { NotificationModel } from './models/notification-model'

const notifications = ref<NotificationModel[]>([])

onMounted(async () => {
  notifications.value = await getNotifications()
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <div v-for="notification in notifications" :key="notification.id">
      <p>{{ notification }}</p>
    </div>
  </main>
</template>

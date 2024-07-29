<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'
import type { NotificationModel } from '@/models/notification-model'
defineProps({
  notification: {
    type: Object as PropType<NotificationModel>
  }
})
</script>

<template>
  <div>
    <p>
      {{ notification.read }}
    </p>
    <h1>
      {{ notification.title }}
    </h1>
    <p>
      {{ notification.preview_te }}
    </p>
    <p>
      {{ notification.author }}
    </p>
    <p>
      {{ notification.created }}
    </p>
    <p>
      {{ notification.available_actions }}
    </p>
  </div>
</template>

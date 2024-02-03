<template>
  <div class="mt-12">
    <h6 class="sidebar-title-font before:sidebar-decoration after:sidebar-decoration">
      {{ title }}
    </h6>
    <table class="text-sm" width="100%">
      <tbody class="border-0">
        <tr 
          v-for="link in socialLinkList" 
          :key="link.url.replace(/\s+/g, '')"
        >
          <td>
            <i :class="link.icon" />
          </td>
          <td>{{ link.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
      
<script setup lang="ts">
import { type SocialLinks } from '@/types/sidebar.props.types';
defineProps<SocialLinks>();
</script>
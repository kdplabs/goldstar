<script setup>
import ProgressionSidebar from '~/components/ProgressionSidebar.vue';
</script>

<template>
  <div class="min-h-screen">
    <nav class="bg-white bg-opacity-20 backdrop-blur-lg rounded-md m-4 border border-white border-opacity-30 shadow-sm sticky top-4 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-white text-xl font-bold flex items-center">
              <span class="text-2xl mr-2">🏆</span>
              <span>Gold Star Leaders</span>
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-6">
            <NuxtLink to="/admin/users" class="text-white hover:text-gray-200 transition-colors">
              User Management
            </NuxtLink>
            <NuxtLink to="/admin/progression" class="text-white hover:text-gray-200 transition-colors">
              Progression
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-12 gap-8">
        <main class="col-span-12 md:col-span-8">
          <slot />
        </main>
        <aside class="col-span-12 md:col-span-4">
          <div class="sticky top-8">
            <ProgressionSidebar />
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

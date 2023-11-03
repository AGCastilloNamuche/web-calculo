<script setup>
const currentTab = ref('')
const p = ref()
const i = ref()
const n = ref()
const y = ref()
const x = ref(0)
const r = ref(0)

const calcularFRC = () => {
  i.value /= 100
  r.value = p.value * ((i.value * Math.pow(1 + i.value, n.value)) / (Math.pow(1 + i.value, n.value) - 1))
}

const calcularFSA = () => {
  i.value /= 100
  x.value = y.value * Math.pow(1 + i.value, -n.value)
}
const limpiar = () => {
  p.value = ""
  i.value = ""
  n.value = ""
  y.value = ""
  x.value = 0
  r.value = 0
}
const itemsMenu = ref([
  {
    title: 'CALCULAR FRC 🚀',
    subtitle: '',
    icon: 'tabler-numbers',
  },
  {
    title: 'CALCULAR FSA 🚀',
    subtitle: '',
    icon: 'tabler-sort-ascending-numbers',
  },
])
</script>
<template>
  <div>
    <v-breadcrumbs class="mb-5" :items="['Calular FRC Y FSA']">
      <template v-slot:prepend>
        <v-icon size="small" icon="tabler-home"></v-icon>
      </template>
    </v-breadcrumbs>

    <VRow no-gutters>
      <VCol cols="12" md="4" lg="3" :class="$vuetify.display.mdAndUp ? 'border-e' : 'border-b'">
        <VCardText>
          <AppStepper @click="limpiar()" v-model:current-step="currentTab" direction="vertical" :items="itemsMenu"
            icon-size="24" class="stepper-icon-step-bg" />
        </VCardText>
      </VCol>

      <VCol cols="12" md="8" lg="9">
        <VCardText>
          <VWindow v-model="currentTab" class="disable-tab-transition">

            <VWindowItem>
              <VCard class="mb-6" title="CALCULAR FRC 🚀">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="6">
                      <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos iniciales</h4>
                      <VForm @submit.prevent="calcularFRC()">
                        <VRow>

                          <VCol cols="12">
                            <AppTextField v-model="p" prepend-inner-icon="tabler-number" label="Capital"
                              placeholder="Ingrese el Capital" type="number" />
                          </VCol>

                          <VCol cols="12">
                            <AppTextField v-model="i" prepend-inner-icon="tabler-number" label="Tasa de interés "
                              placeholder="Ingrese la tasa de interes %" type="number" />
                          </VCol>
                          <VCol cols="12">
                            <AppTextField v-model="n" prepend-inner-icon="tabler-number" label="Nro. Cuotas"
                              placeholder="Nro. Cuotas" type="number" />
                          </VCol>

                          <VCol cols="12">
                            <VBtn type="submit" class="me-2">
                              Calcular
                            </VBtn>

                            <VBtn color="secondary" type="reset" variant="tonal">
                              Limpiar
                            </VBtn>
                          </VCol>
                        </VRow>
                      </VForm>
                    </VCol>
                    <VCol cols="12" md="6">
                      <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">
                        Resultados
                      </h4>

                      <VDivider />
                      <div class="pt-4 px-3">
                        <p>El factor de recuperación de capital es: {{ Math.abs(r.toFixed(2)) }}</p>
                      </div>
                      <VDivider />
                      <VDivider />
                    </VCol>
                  </VRow>

                </VCardText>
              </VCard>
            </VWindowItem>

            <VWindowItem>

              <VCard class="mb-6" title="CALCULAR FSA 🚀">
                <VCardText>
                  <VRow>
                    <VCol cols="12" md="6">
                      <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos iniciales</h4>
                      <VForm @submit.prevent="calcularFSA()">
                        <VRow>

                          <VCol cols="12">
                            <AppTextField v-model="y" prepend-inner-icon="tabler-number" label="Valor futuro"
                              placeholder="Valor futuro" type="number" />
                          </VCol>

                          <VCol cols="12">
                            <AppTextField v-model="i" prepend-inner-icon="tabler-number" label="Tasa de interés "
                              placeholder="Tasa de interes %" type="number" />
                          </VCol>
                          <VCol cols="12">
                            <AppTextField v-model="n" prepend-inner-icon="tabler-number" label="Tiempo"
                              placeholder="Tiempo" type="number" />
                          </VCol>

                          <VCol cols="12">
                            <VBtn type="submit" class="me-2">
                              Calcular
                            </VBtn>

                            <VBtn color="secondary" type="reset" variant="tonal">
                              Limpiar
                            </VBtn>
                          </VCol>
                        </VRow>
                      </VForm>
                    </VCol>
                    <VCol cols="12" md="6">
                      <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">
                        Resultados
                      </h4>

                      <VDivider />
                      <div class="pt-4 px-3">
                        <p>El factor simple de actualizacion es: {{ Math.abs(x.toFixed(2)) }}</p>
                      </div>
                      <VDivider />
                      <VDivider />
                    </VCol>
                  </VRow>

                </VCardText>
              </VCard>

            </VWindowItem>

          </VWindow>
        </VCardText>
      </VCol>
    </VRow>


  </div>
</template>
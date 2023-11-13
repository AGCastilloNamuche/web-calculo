<script setup>
import { onMounted } from 'vue'

const vpa = ref(0)
const vfa = ref(0)
const vpv = ref(0)
const vfv = ref(0)
const p = ref() // pago
const n = ref() // tiempo
const i = ref() //interes 

const calcularAnualidad = () => {
  i.value /= 100;
  var tiempo = parseFloat(n.value);
  var pago = parseFloat(p.value);
  var interes = parseFloat(i.value)
  // ANUALIDAD ANTICIPADA
  // valor presente
  vpa.value = pago * ((1 - Math.pow(1 + i.value, - tiempo)) / interes) * (1 + interes);
  // valor futuro
  vfa.value = pago * (((Math.pow(1 + interes, tiempo + 1) - 1) / interes) - 1);

  // ANUALIDAD VENCIDA
  // valor presente
  vpv.value = pago * (1 - Math.pow(1 + interes, - tiempo) / interes);
  // valor futuro
  vfv.value = pago * ((Math.pow(1 + interes, tiempo) - 1) / interes);

}

onMounted(() => {
})
</script>
<template>
  <div>
    <v-breadcrumbs class="mb-5" :items="['Cálculo de la anualidad']">
      <template v-slot:prepend>
        <v-icon size="small" icon="tabler-home"></v-icon>
      </template>
    </v-breadcrumbs>

    <VCard class="mb-6" title="CALCULO DE ANUALIDADES DE RENTA 🚀">
      <VCardText>
        <VRow>
          <VCol cols="12" md="6">
            <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos iniciales</h4>
            <VForm @submit.prevent="calcularAnualidad()">
              <VRow>

                <VCol cols="12">
                  <AppTextField v-model="p" prepend-inner-icon="tabler-number" label="Pago" placeholder="Ingrese el pago"
                    type="number" />
                </VCol>

                <VCol cols="12">
                  <AppTextField v-model="i" prepend-inner-icon="tabler-number" label="Tasa de interés "
                    placeholder="Ingrese la tasa de interes %" type="number" />
                </VCol>
                <VCol cols="12">
                  <AppTextField v-model="n" prepend-inner-icon="tabler-number" label="Tiempo" placeholder="Ingrese Tiempo"
                    type="number" />
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
              <p>Valor Presente de Anualidad de renta anticipada: {{ Math.abs(vpa.toFixed(2)) }}</p>
              <p>Valor Futuro de Anualidad de renta anticipada: {{ Math.abs(vfa.toFixed(2)) }}</p>
            </div>

            <VDivider />
            <div class="pt-4 px-3">
              <p>Valor Presente de Anualidad de renta vencida: {{ Math.abs(vpv.toFixed(2)) }}</p>
              <p>Valor Futuro de Anualidad de renta vencida: {{ Math.abs(vfv.toFixed(2)) }}</p>
            </div>
            <VDivider />
          </VCol>
        </VRow>

      </VCardText>
    </VCard>


  </div>
</template>

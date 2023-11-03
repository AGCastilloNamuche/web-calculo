<script setup>
import { onMounted } from 'vue'

const vpc = ref(0)
const vfc = ref(0)

const vpd = ref(0)
const vfd = ref(0)

const a = ref() // Valor de la base o Anualidad
const n = ref() // tiempo
const i = ref() //interes 
const g = ref() //Variación constante o gradiente

const calcularAnualidad = () => {
    i.value /= 100;
    // // ANUALIDADES CON GRADIENTE ARITMETICA CRECIENTE
    // // valor presente
    vpc.value = a.value * ((1 - Math.pow(1 + i.value, -n.value)) / i.value) + g.value / i.value * ((1 - Math.pow(1 + i.value, -n.value)) / i.value - (n.value / Math.pow(1 + i.value, n.value)))

    // // valor futuro
    vfc.value = a.value * ((Math.pow(1 + i.value, n.value) - 1) / i.value) + g.value / i.value * (((Math.pow(1 + i.value, n.value) - 1) / i.value) - n.value)

    // // ANUALIDADES CON GRADIENTE ARITMETICA DECRECIENTE
    // // valor presente
    vpd.value = a.value * ((1 - Math.pow(1 + i.value, -n.value)) / i.value) - g.value / i.value * ((1 - Math.pow(1 + i.value, -n.value)) / i.value - (n.value / Math.pow(1 + i.value, n.value)))
    // // valor futuro
    vfd.value = a.value * ((Math.pow(1 + i.value, n.value) - 1) / i.value) - g.value / i.value * (((Math.pow(1 + i.value, n.value) - 1) / i.value) - n.value)

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

        <VCard class="mb-6" title="ANUALIDADES CON GRADIENTE ARITMETICA CRECIENTE Y DECRECIENTE 🚀">
            <VCardText>
                <VRow>
                    <VCol cols="12" md="6">
                        <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos iniciales</h4>
                        <VForm @submit.prevent="calcularAnualidad()">
                            <VRow>

                                <VCol cols="12">
                                    <AppTextField v-model="a" prepend-inner-icon="tabler-number"
                                        label="Valor de la base o Anualidad" placeholder="Valor de la base o Anualidad"
                                        type="number" />
                                </VCol>

                                <VCol cols="12">
                                    <AppTextField v-model="i" prepend-inner-icon="tabler-number" label="Tasa de interés "
                                        placeholder="Tasa de interes %" type="number" />
                                </VCol>
                                <VCol cols="12">
                                    <AppTextField v-model="n" prepend-inner-icon="tabler-number" label="Periodo"
                                        placeholder="Periodo" type="number" />
                                </VCol>

                                <VCol cols="12">
                                    <AppTextField v-model="g" prepend-inner-icon="tabler-number"
                                        label="Variación constante o gradiente"
                                        placeholder="Variación constante o gradiente" type="number" />
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
                            <h6 class="mb-3">ANUALIDADES CON GRADIENTE ARITMETICA CRECIENTE</h6>
                            <p>Valor Presente : {{ Math.abs(vpc.toFixed(2)) }}</p>
                            <p>Valor Futuro : {{ Math.abs(vfc.toFixed(2)) }}</p>
                        </div>

                        <VDivider />
                        <div class="pt-4 px-3">
                            <h6 class="mb-3">ANUALIDADES CON GRADIENTE ARITMETICA DECRECIENTE</h6>
                            <p>Valor Presente : {{ Math.abs(vpd.toFixed(2)) }}</p>
                            <p>Valor Futuro : {{ Math.abs(vfd.toFixed(2)) }}</p>
                        </div>
                        <VDivider />
                    </VCol>
                </VRow>

            </VCardText>
        </VCard>


    </div>
</template>

<script setup>
import { watch } from 'vue'

const currentTab = ref('')
const p = ref()
const i = ref()
const n = ref()
const r = ref(0)
const s = ref()
const vf = ref(0)
const cuotas = ref(0)

const calcularFCS = () => {
    var pago = parseFloat(p.value)
    var interes = parseFloat(i.value) / 100
    var tiempo = parseFloat(n.value)

    vf.value = pago * ((Math.pow(1 + interes, tiempo) - 1) / interes)
    cuotas.value = vf.value / ((Math.pow(1 + interes, tiempo) - 1) / interes)
    console.log(cuotas.value, vf.value);

}

const calcularFDFA = () => {
    var monto = parseFloat(s.value)
    var interes = parseFloat(i.value) / 100
    var nPagos = parseFloat(n.value)

    r.value = (monto * interes) / ((Math.pow(1 + interes, nPagos) - 1))
}
const limpiar = () => {
    p.value = ""
    i.value = ""
    n.value = ""
    r.value = 0
    cuotas.value = 0
    vf.value = 0
}
const itemsMenu = ref([
    {
        title: 'CALCULAR FCS  🚀',
        subtitle: '',
        icon: 'tabler-numbers',
    },
    {
        title: 'CALCULAR FDFA 🚀',
        subtitle: '',
        icon: 'tabler-sort-ascending-numbers',
    },
])
watch(() => {

})
</script>
<template>
    <div>
        <v-breadcrumbs class="mb-5" :items="['Calular FCS Y FDFA']">
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
                            <VCard class="mb-6" title=" FACTOR DE CAPITALIZACIÓN DE UNA SERIE 🚀">
                                <VCardText>
                                    <VRow>
                                        <VCol cols="12" md="6">
                                            <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos
                                                iniciales</h4>
                                            <VForm @submit.prevent="calcularFCS()">
                                                <VRow>

                                                    <VCol cols="12">
                                                        <AppTextField v-model="p" prepend-inner-icon="tabler-number"
                                                            label="Pago" placeholder="Ingrese el pago" type="number" />
                                                    </VCol>

                                                    <VCol cols="12">
                                                        <AppTextField v-model="i" prepend-inner-icon="tabler-number"
                                                            label="Tasa de interés "
                                                            placeholder="Ingrese la tasa de interes %" type="number" />
                                                    </VCol>
                                                    <VCol cols="12">
                                                        <AppTextField v-model="n" prepend-inner-icon="tabler-number"
                                                            label="Tiempo" placeholder="Tiempo" type="number" />
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
                                                <p>El valor a futuro es: {{ Math.abs(vf.toFixed(2)) }}</p>
                                                <p>Las cuotas son: {{ Math.abs(cuotas.toFixed(2)) }}</p>
                                            </div>
                                            <VDivider />
                                            <VDivider />
                                        </VCol>
                                    </VRow>

                                </VCardText>
                            </VCard>
                        </VWindowItem>

                        <VWindowItem>

                            <VCard class="mb-6" title="FACTOR DEPOSITO FONDO DE AMORTIZACION  🚀">
                                <VCardText>
                                    <VRow>
                                        <VCol cols="12" md="6">
                                            <h4 style="text-transform: uppercase; font-size: .9rem;" class="mb-5">Datos
                                                iniciales</h4>
                                            <VForm @submit.prevent="calcularFDFA()">
                                                <VRow>

                                                    <VCol cols="12">
                                                        <AppTextField v-model="s" prepend-inner-icon="tabler-number"
                                                            label="Monto de anualidad" placeholder="Monto de anualidad"
                                                            type="number" />
                                                    </VCol>

                                                    <VCol cols="12">
                                                        <AppTextField v-model="i" prepend-inner-icon="tabler-number"
                                                            label="Tasa de interés " placeholder="Tasa de interes %"
                                                            type="number" />
                                                    </VCol>
                                                    <VCol cols="12">
                                                        <AppTextField v-model="n" prepend-inner-icon="tabler-number"
                                                            label="Número de pagos" placeholder="Número de pagos"
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
                                                <p>El factor deposito fondo de amortizacion es: {{ Math.abs(r.toFixed(2)) }}
                                                </p>
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
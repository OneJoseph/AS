const AsistenOne = {
    data() {
      return {
        dgt: false,
        rsol: {
          posee: false,
          resoluciones: [],
        },
        iva: {
            inscrito: false,
            fecha: '',
            desinscrito: false,
        },
        prevr: {
              rta:false,
              ejer: 2020,
        },
        f: {
          input: {
            show: {
              f06: false,
              f07: false,
              f09: false,
              f14: false
            },
            periodo: '',
          },
          f06: {
              oblig: 0,
              omisos: [],
          },
          f07: {
              oblig: 0,
              omisos: [],
          },
          f14: {
              oblig: 0,
              act: 'Otros',
              omisos: [],
          },
          verf: '06/2021',
          f09: {
              present: false,
              periodos: [],
              estado: {
                selected: 'PLG',
                options: [
                    { estado: 'Perido legal', value: 'PLG' },
                    { estado: 'Cancelada', value: 'CDA' },
                    { estado: 'Pendiente de pago', value: 'PTE' },
                    { estado: 'Pendiente de pago con abono', value: 'ABP' },
                    { estado: 'Pago a plazo Vigente', value: 'VIG' },
                    { estado: 'Cuota vencida', value: 'VEN' },
                  ],
              },
          },
        },
        amp: {
          present: false,
          decla: {
            decre1: {
              f06: [],
              f07: [],
              f14: [],
              rta: [],
            },
            decre2: {
              f06: [],
              f07: [],
              f14: [],
              rta: [],
            },
            decre3: {
              f06: [],
              f07: [],
              f14: [],
              rta: [],
            },
            decre4: {
              f06: [],
              f07: [],
              f14: [],
              rta: [],
            },
          },
          input: {
            show: false,
            decreto: {
              selected: 'D1',
                options: [
                      { estado: '2019', value: 'D1' },
                      { estado: '2018', value: 'D2' },
                      { estado: '2017', value: 'D3' },
                      { estado: '2015', value: 'D4' },
                    ],
            },
            f: {
              selected: 'F7',
                options: [
                      { estado: 'Renta', value: 'RT' },
                      { estado: 'F06', value: 'F6' },
                      { estado: 'F07', value: 'F7' },
                      { estado: 'F14', value: 'F4' },
                    ],
            },
          },
        },
        vmt: {
          esq: false, //esquelas
          montoesq: 11.43,
          permcir: false // permisos de circulacion
        },
        contri: {
          selected: 'SS',
            options: [
                  { estado: 'Solvente', value: 'SS' },
                  { estado: 'No contribuyente', value: 'NC' },
                  { estado: 'Insolvente omiso', value: 'IO' },
                  { estado: 'Insolvente moroso omiso', value: 'MO' },
                  { estado: 'Insolvente Moroso', value: 'IM' },
                  { estado: 'Autorizado a pago a plazo', value: 'AP' }
                ],
        },
        rta: {
          antiguas: {
            ejer: {
              sinsaldo: [],
                dev: [],
                cda: [],
                pte: {
                  t: [],
                  abo: [],
                },
            },
          },
          ejer: {
            sinsaldo: [],
            dev: [],
            cda: [],
            pte: {
              t: [],
              abo: [],
            },
            omisa: {
              div: [],
              iva: [],
              sug: [],
            },
            noblig: {
              bajos: [],
              sinreg: [],
              sug: [],
            },
            plazo: {
              vigente: [],
              vencida: [],
            },
            noproc: [],
          },
          input: {
            show: {
              rt: false,
              anti: false,
            },
            estado: {
              selected: 'SDO',
              options: [
                { estado: 'Sin Saldo', value: 'SDO' },
                { estado: 'Devolucion', value: 'DEV' },
                { estado: 'Cancelada', value: 'CDA' },
                { estado: 'Pendiente de pago', value: 'PTE' },
                { estado: 'Pendiente de pago con abono', value: 'ABP' },
                { estado: 'Omiso diversas', value: 'DIV' },
                { estado: 'Omiso IVA', value: 'IVA' },
                { estado: 'Omiso sugerida', value: 'OSU' },
                { estado: 'Bajos parametros', value: 'BPA' },
                { estado: 'Sin registros', value: 'REG' },
                { estado: 'No obligada sugerida', value: 'NSU' },
                { estado: 'Pago a plazo Vigente', value: 'VIG' },
                { estado: 'Cuota vencida', value: 'VEN' },
                { estado: 'No Procede', value: 'NPR' }
              ],
            },
            estadoanti: {
              selected: 'SDO',
              options: [
                { estado: 'Sin Saldo', value: 'SDO' },
                { estado: 'Devolucion', value: 'DEV' },
                { estado: 'Cancelada', value: 'CDA' },
                { estado: 'Pendiente de pago', value: 'PTE' },
                { estado: 'Pendiente de pago con abono', value: 'ABP' },
               ],
            },
            ejer: '',
            mont: '',
            fcda: '',
            abo: '',
            resol: '',
            fprox: '',
            foli: '', 
          },
        },
      }
    },
    methods: {
      ShowRtaInput(){
        if (!this.rta.input.show.rt) {
          this.OcultarInput(),
          this.rta.input.show.rt = true
        } else {
          this.OcultarInput()
        }
      },
      ShowRantInput(){
        if (!this.rta.input.show.anti) {
          this.OcultarInput(),
          this.rta.input.show.anti = true
        } else {
          this.OcultarInput()
        }
      },
      Showfo6Input() {
        if (!this.f.input.show.f06) {
          this.OcultarInput(),
            this.f.input.show.f06 = true
        } else {
          this.OcultarInput()
        }
      },
      Showfo7Input() {
        if (!this.f.input.show.f07) {
          this.OcultarInput(),
            this.f.input.show.f07 = true
        } else {
          this.OcultarInput()
        }
      },
      Showf14Input() {
        if (!this.f.input.show.f14) {
          this.OcultarInput(),
            this.f.input.show.f14 = true
        } else {
          this.OcultarInput()
        }
      },
      Showf09Input() {
        if (!this.f.input.show.f09) {
          this.OcultarInput(),
            this.f.input.show.f09 = true
        } else {
          this.OcultarInput()
        }
      },
      OcultarInput(){
        this.rta.input.show.rt = false,
        this.rta.input.show.anti =false,
        this.f.input.show.f06 = false,
        this.f.input.show.f07 = false,
        this.f.input.show.f14 = false,
        this.f.input.show.f09 = false
      },
      AddRta(){
        switch (this.rta.input.estado.selected) {
          case 'SDO':
            this.rta.ejer.sinsaldo.push({
              ejer: this.rta.input.ejer,
            }),
           this.ClearInputs()
            break;
          case 'DEV':
          this.rta.ejer.dev.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'CDA':
          this.rta.ejer.cda.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              fcda: this.rta.input.fcda,
            }),
            this.ClearInputs()
            break;
          case 'PTE':
          this.rta.ejer.pte.t.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont
            }),
            this.ClearInputs()
            break;
          case 'ABP':
          this.rta.ejer.pte.abo.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              abo: this.rta.input.abo,
              pte: this.rtapte
            }),
            this.ClearInputs()
            break;
          case 'DIV':
          this.rta.ejer.omisa.div.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'IVA':
          this.rta.ejer.omisa.iva.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'OSU':
          this.rta.ejer.omisa.sug.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'BPA':
          this.rta.ejer.noblig.bajos.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'REG':
          this.rta.ejer.noblig.sinreg.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'NSU':
          this.rta.ejer.noblig.sug.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'VIG':
          this.rta.ejer.plazo.vigente.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              abo: this.rta.input.abo,
              pte: this.rtapte,
              resol: this.rta.input.resol,
              fprox: this.rta.input.fprox
            }),
            this.ClearInputs()
            break;
          case 'VEN':
          this.rta.ejer.plazo.vencida.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              abo: this.rta.input.abo,
              pte: this.rtapte,
              resol: this.rta.input.resol
            }),
            this.ClearInputs()
            break;
          case 'NPR':
          this.rta.ejer.noproc.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              foli: this.rta.input.folio,
            }),
            this.ClearInputs()
          break;
        }
      },
      AddRanti(){
        switch (this.rta.input.estadoanti.selected) {
          case 'SDO':
            this.rta.antiguas.ejer.sinsaldo.push({
              ejer: this.rta.input.ejer,
            }),
           this.ClearInputs()
            break;
          case 'DEV':
          this.rta.antiguas.ejer.dev.push({
              ejer: this.rta.input.ejer,
            }),
            this.ClearInputs()
            break;
          case 'CDA':
          this.rta.antiguas.ejer.cda.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              fcda: this.rta.input.fcda,
            }),
            this.ClearInputs()
            break;
          case 'PTE':
          this.rta.antiguas.ejer.pte.t.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont
            }),
            this.ClearInputs()
            break;
          case 'ABP':
          this.rta.antiguas.ejer.pte.abo.push({
              ejer: this.rta.input.ejer,
              mont: this.rta.input.mont,
              abo: this.rta.input.abo,
              pte: this.rtapte
            }),
            this.ClearInputs()
            break;
        }
      },
      AddFomiso(){
        if (this.f.input.show.f06) {
          this.f.f06.omisos.push({
            periodo: this.f.input.periodo
          }),
          this.ClearInputs()
        } else if (this.f.input.show.f07) {
          this.f.f07.omisos.push({
            periodo: this.f.input.periodo
          }),
          this.ClearInputs()
        } else {
          this.f.f14.omisos.push({
            periodo: this.f.input.periodo
          })
          this.ClearInputs()
        }
      },
      ClearInputs(){
        this.rta.input.ejer = '',
        this.rta.input.mont = '',
        this.rta.input.fcda = '',
        this.rta.input.abo = '',
        this.rta.input.resol = '',
        this.rta.input.fprox = '',
        this.rta.input.foli = '',
        this.f.input.periodo = ''
      },
    },
    computed: {
      nfv: function() { 
        return parseFloat(this.f.f06.oblig) + parseFloat(this.f.f07.oblig) + parseFloat(this.f.f14.oblig)
      },
      omif: function() {
        return this.f.f06.omisos.length + this.f.f07.omisos.length + this.f.f14.omisos.length
      },
      rtaz: function() {
        return this.ranti + this.rta.ejer.sinsaldo.length + this.rta.ejer.dev.length + this.rta.ejer.cda.length + this.rta.ejer.pte.t.length + this.rta.ejer.pte.abo.length + this.rta.ejer.omisa.div.length + this.rta.ejer.omisa.iva.length + this.rta.ejer.omisa.sug.length + this.rta.ejer.noblig.bajos.length + this.rta.ejer.noblig.sinreg.length + this.rta.ejer.noblig.sug.length + this.rta.ejer.plazo.vigente.length + this.rta.ejer.plazo.vencida.length + this.rta.ejer.noproc.length
      },
      ranti: function() {
        return this.rta.antiguas.ejer.sinsaldo.length + this.rta.antiguas.ejer.dev.length + this.rta.antiguas.ejer.cda.length + this.rta.antiguas.ejer.pte.t.length + this.rta.antiguas.ejer.pte.abo.length
      },
      rtapte: function() {
        return this.rta.input.mont - this.rta.input.abo
      },
    }
  }

  const asistenApp = Vue.createApp(AsistenOne).mount('#app')
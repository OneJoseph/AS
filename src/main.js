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
            mont: '',
            fcda: '',
            abo: '',
            resol: '',
            fprox: '',
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
            db: [],
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
          db:[],
          input: {
            show: false,
            decreto: {
              selected: 'D1',
                options: [
                      { decreto: '2019', value: 'D1' },
                      { decreto: '2018', value: 'D2' },
                      { decreto: '2017', value: 'D3' },
                      { decreto: '2015', value: 'D4' },
                    ],
            },
            f: {
              selected: 'F7',
                options: [
                      { form: 'Renta', value: 'RT' },
                      { form: 'F06', value: 'F6' },
                      { form: 'F07', value: 'F7' },
                      { form: 'F14', value: 'F4' },
                    ],
            },
            estado: {
              selected: 'CDA',
              options: [
                { estado: 'Cancelada', value: 'CDA' },
                { estado: 'Pendiente de pago', value: 'PTE' },
                { estado: 'Pendiente de pago con abono', value: 'ABP' },
                { estado: 'Pago a plazo Vigente', value: 'VIG' },
                { estado: 'Cuota vencida', value: 'VEN' },
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
          db: {
            anti: [],
            actu: [],
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
      ShowAmpInput() {
        if (!this.amp.input.show) {
          this.OcultarInput(),
            this.amp.input.show = true
        } else {
          this.OcultarInput()
        }
      },
      OcultarInput(){
        this.rta.input.show.rt = false,
        this.rta.input.show.anti = false,
        this.f.input.show.f06 = false,
        this.f.input.show.f07 = false,
        this.f.input.show.f14 = false,
        this.f.input.show.f09 = false,
        this.amp.input.show = false
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
      Addfrta() {
        this.rta.db.actu.push({
          ejer: this.rta.input.ejer,
          estado: this.rta.input.estado.selected,
          mont: this.rta.input.mont,
          fcda: this.rta.input.fcda,
          abo: this.rta.input.abo,
          pte: this.rtapte,
          resol: this.rta.input.resol,
          fprox: this.rta.input.fprox,
          foli: this.rta.input.folio
        })
        this.ClearInputs()
      },
      Addfranti() {
        this.rta.db.anti.push({
          ejer: this.rta.input.ejer,
          estado: this.rta.input.estado.selected,
          mont: this.rta.input.mont,
          fcda: this.rta.input.fcda,
          abo: this.rta.input.abo,
          pte: this.rtapte
        })
        this.ClearInputs()
      },
      Addfamp(){
        this.amp.db.push({
          ejer: this.amp.input.ejer,
          decreto: this.amp.input.decreto.selected,
          form: this.amp.input.f.selected,
          estado: this.amp.input.estado.selected,
          mont: this.amp.input.mont,
          fcda: this.amp.input.fcda,
          abo: this.amp.input.abo,
          pte: this.amppte,
          resol: this.amp.input.resol,
          fprox: this.amp.input.fprox
        })
        this.ClearInputs()
      },
      Addftbr(){
        this.f.f09.db.push({
          periodo: this.f.input.periodo,
          estado: this.f.f09.estado.selected,
          mont: this.f.input.mont,
          fcda: this.f.input.fcda,
          abo: this.f.input.abo,
          pte: this.tbrmontpte,
          resol: this.f.input.resol,
          fprox: this.f.input.fprox
        })
        this.ClearInputs()
      },
      filtros(db, decreto, form){
        if (db, decreto, form) {
          return db.filter(filtro => filtro.decreto === decreto && filtro.form === form)        
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
        this.f.input.periodo = '',
        this.f.input.mont = '',
        this.f.input.fcda = '',
        this.f.input.abo = '',
        this.f.input.resol = '',
        this.f.input.fprox = '',
        this.amp.input.ejer = '',
        this.amp.input.mont = '',
        this.amp.input.fcda = '',
        this.amp.input.abo = '',
        this.amp.input.resol = '',
        this.amp.input.fprox = '',
        this.amp.input.foli = ''
      },
      RemoveF(index, tipo){
        switch (tipo) {
          case 'RT':
            this.rta.db.actu.splice(index, 1)
            break;
          case 'RA':
            this.rta.db.anti.splice(index, 1)
            break;
          case 'F6':
            this.f.f06.omisos.splice(index, 1)
            break;
          case 'F7':
            this.f.f07.omisos.splice(index, 1)
            break;
          case 'F4':
            this.f.f14.omisos.splice(index, 1)
            break;
          case 'F9':
            this.f.f09.db.splice(index, 1)
            break;
          case 'DL':
            this.amp.db.splice(index, 1)
            break;
        }
      },
    },
    computed: {
      ivas(){
        if (this.iva.inscrito && !this.iva.desinscrito) {
          return 1
        }
        if (this.iva.inscrito && this.iva.desinscrito) {
          return 2
        }
      },
      nfv() { 
        return parseFloat(this.f.f06.oblig) + parseFloat(this.f.f07.oblig) + parseFloat(this.f.f14.oblig)
      },
      omif() {
        return this.f.f06.omisos.length + this.f.f07.omisos.length + this.f.f14.omisos.length
      },
      // funciones para rta optimizadas
      rtaz() {
        return this.rta.db.anti.length + this.rta.db.actu.length 
      },
      rtapte() {
        if(this.rta.input.abo){
          return this.rta.input.mont - this.rta.input.abo
        } else {
          return ''
        }
      },
      
      // funcionnes para amp optimizadas
      amps() {
        return this.amp.db.length
      },
      amppte() {
        if(this.amp.input.abo){
          return this.amp.input.mont - this.amp.input.abo
        } else {
          return ''
        }
      },
      ampd1rt(){
        return this.filtros(this.amp.db, 'D1', 'RT')
      },
      ampd1f06(){
        return this.filtros(this.amp.db, 'D1', 'F6')
      },
      ampd1f07(){
        return this.filtros(this.amp.db, 'D1', 'F7')
      },
      ampd1f14(){
        return this.filtros(this.amp.db, 'D1', 'F14')
      },
      ampd2rt(){
        return this.filtros(this.amp.db, 'D2', 'RT')
      },
      ampd2f06(){
        return this.filtros(this.amp.db, 'D2', 'F6')
      },
      ampd2f07(){
        return this.filtros(this.amp.db, 'D2', 'F7')
      },
      ampd2f14(){
        return this.filtros(this.amp.db, 'D2', 'F14')
      },
      ampd3rt(){
        return this.filtros(this.amp.db, 'D3', 'RT')
      },
      ampd3f06(){
        return this.filtros(this.amp.db, 'D3', 'F6')
      },
      ampd3f07(){
        return this.filtros(this.amp.db, 'D3', 'F7')
      },
      ampd3f14(){
        return this.filtros(this.amp.db, 'D3', 'F14')
      },
      ampd4rt(){
        return this.filtros(this.amp.db, 'D4', 'RT')
      },
      ampd4f06(){
        return this.filtros(this.amp.db, 'D4', 'F6')
      },
      ampd4f07(){
        return this.filtros(this.amp.db, 'D4', 'F7')
      },
      ampd4f14(){
        return this.filtros(this.amp.db, 'D4', 'F14')
      },

      // funciones para el tbr optimizadas
      tbrs(){
        return this.f.f09.db.length
      },
      tbrmontpte() {
        if(this.f.input.abo){
          return this.f.input.mont - this.f.input.abo
        } else {
          return ''
        }
      },
    }
  }

  const asistenApp = Vue.createApp(AsistenOne).mount('#app')
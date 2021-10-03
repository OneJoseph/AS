const { useQuasar, exportFile, copyToClipboard } = Quasar
const AsistenOne = {
    data() {
      return {
        q: useQuasar(),
        copi: '',
        tecnico: 'DF/AH',
        marginacion: false,
        tab: {
          rta: 'actu',
        },
        detalle: true,
        dgt: false,
        ejercicios: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'
                ],
        ejercicios_a: ['1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990'],
        ejer_vs: [' 2020', ' 2019', ' 2018'],
        ejer_vs2: [' 2020', ' 2019', ' 2018', ' 2017', ' 2016'],
        rsol: {
          posee: false,
          input: {
            show: false,
            text: '',
            obtext:'',
          },
        },
        iva: {
            inscrito: false,
            fecha: '',
            desinscrito: false,
        },
        prevr: {
              ejer: '',
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
          verf: '08/2021',
          f09: {
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
          db:[],
          input: {
            show: false,
            decreto: {
              selected: 'D1',
                options: [
                      { decreto: '521/2019', value: 'D1' },
                      { decreto: '804/2017', value: 'D2' },
                      { decreto: '793/2014', value: 'D3' },
                      { decreto: '652/2008', value: 'D4' },
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
                { estado: 'Con abono', value: 'ABP' },
                { estado: 'Pago a plazo', value: 'VIG' },
                { estado: 'Cuota vencida', value: 'VEN' },
              ],
            },
            ejer: [],
            periodo: '',
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
          montoesq: '',
          permcir: false // permisos de circulacion
        },
        contri: {
          selected: 'NC',
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
                { estado: 'Omiso Actividad', value: 'OMA' },
                { estado: 'Omiso sugerida', value: 'OSU' },
                { estado: 'Bajos parametros', value: 'BPA' },
                { estado: 'Sin registros', value: 'REG' },
                { estado: 'No obligada sugerida', value: 'NSU' },
                { estado: 'Pago a plazo Vigente', value: 'VIG' },
                { estado: 'Cuota vencida', value: 'VEN' },
                //{ estado: 'No Procede', value: 'NPR' }
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
            ejer: [],
            mont: '',
            fcda: '',
            abo: '',
            resol: '',
            fprox: '',
            foli: '', 
          },
        },
        vs: {
          f11: {
            db: [],
            input: {
              show: false,
              ejer: [' 2020'],
              vs: {
                selected: 'VS',
                options: [
                  { vsf: 'F910-F11', value: 'VS' },
                  { vsf: 'SIN RETENCIONES', value: 'SR' },
                ],
              },
              dif: {
                selected: 'S',
                options: [
                  { estado: 'CON DIF', value: 'C' },
                  { estado: 'SIN DIF', value: 'S' },
                ],
              },
            },
          },
          f14: {
            db: [],
            input: {
              show: false,
              ejer: [' 2020'],
              vs: {
                selected: 'NA',
                options: [
                  { vsf: 'F910-F14', value: 'VS' },
                  { vsf: 'F910', value: 'NA' },
                ],
              },
              dif: {
                selected: 'M',
                options: [
                  { estado: 'CON DIF S/SINTAXIS', value: 'C' },
                  { estado: 'SIN DIF S/SINTAXIS', value: 'S' },
                  { estado: 'PROFISCO', value: 'P' },
                  { estado: 'PREV MARG', value: 'M' },
                ],
              },
              novs: {
                selected: 'M',
                options: [
                  { estado: 'NO OBLIG', value: 'N' },
                  { estado: 'OMISO', value: 'O' },
                  { estado: 'PREV MARG', value: 'M' },
                  { estado: 'SIN DETERMINAR', value: 'D' },
                ],
              },
            },
          },
        },
      }
    },
    methods: {
      // seran eliminados 
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
      ShowRsolInput() {
        if (!this.rsol.input.show) {
          this.OcultarInput(),
            this.rsol.input.show = true
        } else {
          this.OcultarInput()
        }
      },
      ShowVs11Input() {
        if (!this.vs.f11.input.show) {
          this.OcultarInput(),
            this.vs.f11.input.show = true
        } else {
          this.OcultarInput()
        }
      },
      ShowVs14Input() {
        if (!this.vs.f14.input.show) {
          this.OcultarInput(),
            this.vs.f14.input.show = true
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
        this.amp.input.show = false,
        this.rsol.input.show = false,
        this.vs.f11.input.show = false,
        this.vs.f14.input.show = false
      },
      // fin de eliminar
      AddFomiso(){
        if (this.f.input.show.f06) {
          this.f.f06.omisos.push({
            periodo: this.f.input.periodo
          }),
          this.ClearInputs()
          this.autostatus()
        } else if (this.f.input.show.f07) {
          this.f.f07.omisos.push({
            periodo: this.f.input.periodo
          }),
          this.ClearInputs()
          this.autostatus()
        } else {
          this.f.f14.omisos.push({
            periodo: this.f.input.periodo
          })
          this.ClearInputs()
          this.autostatus()
        }
      },
      Addfrta() {
        this.rta.db.actu.push({
          tipo: 'RENTA',
          ejer: this.rta.input.ejer,
          estado: this.rta.input.estado.selected,
          mont: this.rta.input.mont,
          fcda: this.rta.input.fcda,
          abo: this.rta.input.abo,
          pte: this.rtapte,
          resol: this.rta.input.resol,
          fprox: this.rta.input.fprox,
          foli: this.rta.input.foli
        })
        this.q.notify({
          // group: false,
          progress: true,
          message: 'Renta agregada',
          color: 'positive',
          position: 'top-right',
        })
        this.ClearInputs()
        this.autostatus()
      },
      Addfranti() {
        this.rta.db.anti.push({
          tipo: 'RENTA',
          ejer: this.rta.input.ejer,
          estado: this.rta.input.estadoanti.selected,
          mont: this.rta.input.mont,
          fcda: this.rta.input.fcda,
          abo: this.rta.input.abo,
          pte: this.rtapte
        })
        this.q.notify({
          progress: true,
          message: 'Renta antigua agregada',
          color: 'positive',
          position: 'top-right',
        })
        this.ClearInputs()
        this.autostatus()
      },
      Addfamp(){
        if (this.amp.input.periodo.length < 1) {
          this.q.notify({
            progress: true,
            message: 'Campo periodo es requerido',
            color: 'negative',
            position: 'top-right'
          })
        } else {
        this.amp.db.push({
          tipo: 'AMPARADA',
          ejer: this.amp.input.f.selected == 'RT' ? this.amp.input.ejer : this.amp.input.periodo,
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
        this.q.notify({
          progress: true,
          message: 'Declaracion amparada agregada',
          color: 'positive',
          position: 'top-right',
        })
        this.ClearInputs()
        this.autostatus()
        }
      },
      Addftbr(){
        this.f.f09.db.push({
          tipo: 'F09',
          periodo: this.f.input.periodo,
          estado: this.f.f09.estado.selected,
          mont: this.f.input.mont,
          fcda: this.f.input.fcda,
          abo: this.f.input.abo,
          pte: this.tbrmontpte,
          resol: this.f.input.resol,
          fprox: this.f.input.fprox
        })
        this.q.notify({
          progress: true,
          message: 'TBR agregado',
          color: 'positive',
          position: 'top-right',
        })
        this.ClearInputs()
        this.autostatus()
      },
      Addvsf11() {
        this.vs.f11.db.push({
          vsf: this.vs.f11.input.vs.selected,
          estado: this.vs.f11.input.vs.selected == 'VS' ? this.vs.f11.input.dif.selected : '',
          ejer: this.vs.f11.input.ejer,
        }),
        this.q.notify({
          progress: true,
          message: 'Agregado',
          color: 'positive',
          position: 'top-right',
        })
        this.vs.f11.input.ejer = [],
        this.autostatus()
      },
      Addvsf14() {
        this.vs.f14.db.push({
          vsf: this.vs.f14.input.vs.selected,
          estado: this.vs.f14.input.vs.selected == 'VS' ? this.vs.f14.input.dif.selected : this.vs.f14.input.novs.selected,
          ejer: this.vs.f14.input.ejer,
        }),
        this.q.notify({
          progress: true,
          message: 'Agregado',
          color: 'positive',
          position: 'top-right',
        })
        this.vs.f14.input.ejer = [],
        this.autostatus()
      },
      filtros(db, decreto, form, estado){
        if (db && decreto && form && !estado) {
          return db.filter(filtro => filtro.decreto === decreto && filtro.form === form)        
        }
        if (db && decreto && !form && !estado) {
          return db.filter(filtro => filtro.decreto === decreto)        
        }
        if (db && !decreto && !form && estado) {
          return db.filter(filtro => filtro.estado === estado)
        }
      },
      ClearInputs(){
        this.rta.input.ejer = [],
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
        this.amp.input.ejer = [],
        this.amp.input.periodo = '',
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
          case 'V1':
          this.vs.f11.db.splice(index, 1)
            break;
          case 'V2':
          this.vs.f14.db.splice(index, 1)
            break;
        }
        this.autostatus()
      },
      autostatus() {
        if (this.omi && !this.obSmor && this.obSaut) {
          this.contri.selected = 'IO'
        }
        if (this.omi && !this.obSmor && !this.obSaut) {
          this.contri.selected = 'IO'
        }
        if (!this.omi && this.obSmor && this.obSaut) {
          this.contri.selected = 'IM'
        }
        if (!this.omi && this.obSmor && !this.obSaut) {
          this.contri.selected = 'IM'
        }
        if (this.omi && this.obSmor && this.obSaut) {
          this.contri.selected = 'MO'
        }
        if (this.omi && this.obSmor && !this.obSaut) {
          this.contri.selected = 'MO'
        }
        if (!this.omi && !this.obSmor && this.obSaut) {
          this.contri.selected = 'AP'
        }
        if (!this.omi && !this.obSmor && !this.obSaut) {
          this.contri.selected = 'SS'
        }
      },
      addvmt(){
        this.vmt.esq = !this.vmt.esq
        if (this.vmt.esq) {
          this.vmt.montoesq = '11.43'
        } else {
          this.vmt.montoesq = ''
        }
        this.autostatus()
      },
      copy_M() {
        const marg = document.getElementById('textMargi').innerText;
        
        this.copi = marg
        
          copyToClipboard(marg)
            .then(() => {
              this.q.notify({
                progress: true,
                message: 'Marginacion Copiada!',
                position: 'top-right',
              })
            })
            .catch(() => {
              this.q.notify({
                progress: true,
                message: 'No se pudo copiar',
                position: 'top-right',
              })
            })
      },
      copy_O() {
        const obser = document.getElementById('textObser').innerText;
      
      
        copyToClipboard(obser)
          .then(() => {
            this.q.notify({
              progress: true,
              message: 'Observacion Copiada!',
              position: 'top-right',
            })
          })
          .catch(() => {
            this.q.notify({
              progress: true,
              message: 'No se pudo copiar',
              position: 'top-right',
            })
          })
      },
      Export() {
        const marg = document.getElementById('textMargi').innerText;
        const combi = marg + 'beta'
        
        const status = exportFile('important.txt', combi)
        
        if (status === true) {
          // browser allowed it
        }
        else {
          // browser denied it
          console.log('Error: ' + status)
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
          const x = this.rta.input.mont - this.rta.input.abo
          return x.toFixed(2)
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
          const x = this.amp.input.mont - this.amp.input.abo
          return x.toFixed(2)
        } else {
          return ''
        }
      },
      ampd1(){
        return this.filtros(this.amp.db, 'D1', false, false)
      },
      ampd2() {
        return this.filtros(this.amp.db, 'D2', false, false)
      },
      ampd3() {
        return this.filtros(this.amp.db, 'D3', false, false)
      },
      ampd4() {
        return this.filtros(this.amp.db, 'D4', false, false)
      },
      ampd1rt(){
        return this.filtros(this.amp.db, 'D1', 'RT', false)
      },
      ampd1f06(){
        return this.filtros(this.amp.db, 'D1', 'F6', false)
      },
      ampd1f07(){
        return this.filtros(this.amp.db, 'D1', 'F7', false)
      },
      ampd1f14(){
        return this.filtros(this.amp.db, 'D1', 'F4', false)
      },
      ampd2rt(){
        return this.filtros(this.amp.db, 'D2', 'RT', false)
      },
      ampd2f06(){
        return this.filtros(this.amp.db, 'D2', 'F6', false)
      },
      ampd2f07(){
        return this.filtros(this.amp.db, 'D2', 'F7', false)
      },
      ampd2f14(){
        return this.filtros(this.amp.db, 'D2', 'F4', false)
      },
      ampd3rt(){
        return this.filtros(this.amp.db, 'D3', 'RT', false)
      },
      ampd3f06(){
        return this.filtros(this.amp.db, 'D3', 'F6', false)
      },
      ampd3f07(){
        return this.filtros(this.amp.db, 'D3', 'F7', false)
      },
      ampd3f14(){
        return this.filtros(this.amp.db, 'D3', 'F4', false)
      },
      ampd4rt(){
        return this.filtros(this.amp.db, 'D4', 'RT', false)
      },
      ampd4f06(){
        return this.filtros(this.amp.db, 'D4', 'F6', false)
      },
      ampd4f07(){
        return this.filtros(this.amp.db, 'D4', 'F7', false)
      },
      ampd4f14(){
        return this.filtros(this.amp.db, 'D4', 'F4', false)
      },

      // funciones para el tbr optimizadas
      tbrs(){
        return this.f.f09.db.length
      },
      tbrmontpte() {
        if(this.f.input.abo){
          const x = this.f.input.mont - this.f.input.abo
          return x.toFixed(2)
        } else {
          return ''
        }
      },
      
      // funcion para obs de saldos y omisos
      obsaldo(){
        return this.filtros(this.rta.db.actu, false, false, 'PTE')
              .concat(this.filtros(this.rta.db.actu, false, false, 'ABP'))
              .concat(this.filtros(this.rta.db.actu, false, false, 'VIG'))
              .concat(this.filtros(this.rta.db.actu, false, false, 'VEN'))
              .concat(this.filtros(this.rta.db.anti, false, false, 'PTE'))
              .concat(this.filtros(this.rta.db.anti, false, false, 'ABP'))
              .concat(this.filtros(this.rta.db.anti, false, false, 'VIG'))
              .concat(this.filtros(this.rta.db.anti, false, false, 'VEN'))
              .concat(this.filtros(this.amp.db, false, false, 'PTE'))
              .concat(this.filtros(this.amp.db, false, false, 'ABP'))
              .concat(this.filtros(this.amp.db, false, false, 'VIG'))
              .concat(this.filtros(this.amp.db, false, false, 'VEN'))
              .concat(this.filtros(this.f.f09.db, false, false, 'PTE'))
              .concat(this.filtros(this.f.f09.db, false, false, 'ABP'))
              .concat(this.filtros(this.f.f09.db, false, false, 'VIG'))
              .concat(this.filtros(this.f.f09.db, false, false, 'VEN'))
      },
      omirt(){
        return this.filtros(this.rta.db.actu, false, false, 'DIV')
          .concat(this.filtros(this.rta.db.actu, false, false, 'IVA'))
          .concat(this.filtros(this.rta.db.actu, false, false, 'OSU'))
          .concat(this.filtros(this.rta.db.anti, false, false, 'DIV'))
          .concat(this.filtros(this.rta.db.anti, false, false, 'IVA'))
          .concat(this.filtros(this.rta.db.anti, false, false, 'OSU'))
      },
      omi(){
        return this.omif + this.omirt.length + this.obdif11.length + this.obdif14.length + this.omif910.length
      },
      obSmor() {
        const mor = this.obsaldo.filter(filtro => filtro.estado === 'PTE')
                .concat(this.obsaldo.filter(filtro => filtro.estado === 'ABP'))
                .concat(this.obsaldo.filter(filtro => filtro.estado === 'VEN'))
        return mor.length + this.vmt.montoesq.length
      },
      obSaut() {
        const aut = this.obsaldo.filter(filtro => filtro.estado === 'VIG')
        return aut.length
      },
      obdif11() {
        return this.vs.f11.db.filter(filtro => filtro.estado === 'C')
      },
      obdif14() {
        return this.vs.f14.db.filter(filtro => filtro.estado === 'C')
      },
      omif910() {
        return this.vs.f14.db.filter(filtro => filtro.estado === 'O')
      },
      obSrta(){
        return this.obsaldo.filter(filtro => filtro.tipo === 'RENTA')
      },
      obStbr() {
        return this.obsaldo.filter(filtro => filtro.tipo === 'F09')
      },
      obSamp() {
        return this.obsaldo.filter(filtro => filtro.tipo === 'AMPARADA')
      },
      obSampf6() {
        return this.obsaldo.filter(filtro => filtro.form === 'F6')
      },
      obSampf7() {
        return this.obsaldo.filter(filtro => filtro.form === 'F7')
      },
      obSampf4() {
        return this.obsaldo.filter(filtro => filtro.form === 'F4')
      },
    }
  }

  const asistenApp = Vue.createApp(AsistenOne)
  asistenApp.use(Quasar)
  Quasar.lang.set(Quasar.lang.es)
  asistenApp.mount('#app')
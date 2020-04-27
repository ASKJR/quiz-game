import config from 'buefy/src/utils/config'
import { Loading, Icon, Table, Toast, Dialog } from 'buefy/src/components'

const Buefy = {
    install(Vue, options = {}) {
        // Options
        config.defaultIconComponent = 'font-awesome-icon';
        config.defaultIconPack = 'fas';
        Vue.use(Loading);
        Vue.use(Icon);
        Vue.use(Table);
        Vue.use(Toast);
        Vue.use(Dialog);
    }
}

export default Buefy;
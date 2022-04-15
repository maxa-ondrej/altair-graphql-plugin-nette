class NetteAltairPlugin {

    initialize(ctx) {
        let element = document.createElement('a');
        element.href = `${state.apiUrl}?query=${state.query}&variables=${state.variables}`, '_blank';
        element.target = '_blank';
        ctx.app.createPanel(element)
    }

    async destroy() {

    }

}

window.AltairGraphQL.plugins.NetteAltairPlugin = NetteAltairPlugin;
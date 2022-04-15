class NetteAltairPlugin {

    initialize(ctx) {
        ctx.app.createAction({
            title: 'Open in Nette',
            execute(state) {
                console.log(`${state.apiUrl}?query=${state.query}&variables=${state.variables}`);
                window.open(`${state.apiUrl}?query=${state.query}&variables=${state.variables}`, '_blank');
            }
        })
    }

    async destroy() {

    }

}

window.AltairGraphQL.plugins.NetteAltairPlugin = NetteAltairPlugin;
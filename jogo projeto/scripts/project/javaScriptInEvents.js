

const scriptsInEvents = {

	async FolhaDeEventos1_Event34_Act1(runtime, localVars)
	{
		
		let contratos = runtime.globalVars.contratos;
		
		contratos++;
		
		runtime.globalVars.contratos = contratos;
	},

	async FolhaDeEventos1_Event35_Act3(runtime, localVars)
	{
		
		let vida = runtime.globalVars.Vidas;
		
		
		vida--;
		
		
		runtime.globalVars.Vidas = vida;
		
		
		if(vida<= 0){
			runtime.goToLayout("tela de game over");
		}
	},

	async FolhaDeEventos1_Event36_Act3(runtime, localVars)
	{
		
		let vida = runtime.globalVars.Vidas;
		
		
		vida--;
		
		
		runtime.globalVars.Vidas = vida;
		
		
		if(vida<= 0){
			runtime.goToLayout("tela de game over");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;

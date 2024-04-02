class Utilities {
    async  sleep(milisecond){
        return new Promise(resolver=> setTimeout(resolver,milisecond));
    }
}

export default new Utilities();
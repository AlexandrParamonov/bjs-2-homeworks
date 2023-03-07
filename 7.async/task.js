class AlarmClock{
    constructor(alarmCollection, intervalId){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback, id){
        if (time === null || callback === undefined){
            throw new Error('Отсутствуют обязательные аргументы')
        }
        if (this.alarmCollection.some(elem => elem.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        this.alarmCollection.push({time, canCall: true, callback})
       }
    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(el => el.time !== time);
    }
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }
    start(){
        if(this.intervalId !== null) {
            return;
        }
        let func = () => this.alarmCollection.forEach(alarm => {
            if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
            }
        });
        this.intervalId = setInterval(func, 1000);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

exports.run = function(client, message, args){
    // if( !== role.id('321245223671824394')) return; - Role restriction development.

    min = Math.ceil(1);
    max = Math.floor(75)
    y = Math.floor(Math.random() * (max - min + 1)) + min;

    if (y < 15){
        console.log('B' + y);
        message.channel.send('B' + y);
    } else

    if (y > 15 && y < 30){
        console.log('I' + y);
        message.channel.send('I' + y);
    } else

    if (y > 30 && y < 45){
        console.log('N' + y);
        message.channel.send('N' + y);
    } else

    if (y > 45 && y < 60){
        console.log('G' + y);
        message.channel.send('G' + y);
    } else {
        console.log('O' + y);
        message.channel.send('O' + y);
    }
}

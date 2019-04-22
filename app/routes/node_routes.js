const ObjectID    = require('mongodb').ObjectID;
const shell     = require('node-powershell');
//const spawn       = require('child_process').spawn,child;

module.exports = function(app, db){
    app.get('/ListMovies', (req, res) => {
        //let ps = new shell({
        //    executionPolicy: 'Bypass',
        //    noProfile: true
        //  });
           
        //  ps.addCommand('echo')
        //  ps.invoke()
        //  .then(output => {
        //    console.log(output);
        //  })
        //  .catch(err => {
        //    console.log(err);
        //    ps.dispose();
        //  });
        // child = spawn("powershell.exe",["C:\\Users\\Varun\\app\\routes\\movieList.ps1"]);
        // child.stdout.on("data", data =>{
        //     console.log("Powershell Data: " + data);
        //     res.send(data);
        // });
        // child.stderr.on("data", data => {
        //    console.log("Powershell Errors: " + data);
        //});
        //child.on("exit",function(){
        //    console.log("Powershell Script finished");
        //});
        //child.stdin.end(); //end input

        const fs = require('fs');
        const fileLoc = "C:\\Users\\Administrator\\app\\routes\\movieList.txt";
        const contents = fs.readFileSync(fileLoc,'utf8');
        //console.log(contents);
        //for (var i = 0; i < fileLoc.length; i++){
        //    res.send(contents[[i]] + '<br />');
        //}
        res.send(contents);
    });

    app.get('/status', (req, res) => {
        res.send("We are up and running!");
    });    

    /*app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err,item) => {
            if (err){
                res.send({'error': 'An error occured'});
            }else{
                res.send(item);
            }
        });
    });
    */

    /*app.post('/notes', (req, res) => {
        //console.log(req.body)
        //res.send('Hello')
        const note = { text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err, result) =>{
            if (err){
                res.send({'error': 'An error occured'});
            }else{
                res.send(result.ops[0]);
            }
        })
    });
    */
};

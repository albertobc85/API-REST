const userRoutes = (app, fs) => {
    // variables to access to JSON data
    const dataPath1 = './data/response_1614598457303.json';
    const dataPath2 = './data/response_1614598437377.json';
  
    // Where to read JSON data
    app.get('/policies', (req, res) => {
      fs.readFile(dataPath1, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
    app.get('/policies/:id', (req, res) => {
        fs.readFile(dataPath2, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });
  };
  
  module.exports = userRoutes;
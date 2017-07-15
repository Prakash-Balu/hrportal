var express = require('express');
var router = express.Router();
const uuidv4 = require('uuid/v4');
//uuidv4(); // ⇨ 'f71c9fb3-2e34-46ee-bec3-d9baee2077ae'

/* GET users listing. */
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  req.getConnection(function(err, connection) {
    connection.query('SELECT u.name, u.password, u.firstname, u.lastname, ur.user_guid, ur.role_guid, r.name AS role_name FROM user AS u JOIN user_role AS ur ON ur.user_guid = u.guid JOIN roles AS r ON ur.role_guid = r.guid  WHERE u.name = ?', [username], function(error, results, fields) {
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          "code": 400,
          "failed": "error ocurred"
        })
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
          if (results[0].password == password) {
            res.send({
              "code": 200,
              "message": "login sucessfull",
              "userdata": results[0]
            });
          } else {
            res.send({
              "code": 204,
              "message": "Username and password does not match"
            });
          }
        } else {
          res.send({
            "code": 204,
            "message": "Username does not exists"
          });
        }
      }
    });
  });
});

router.post('/:adduser', function(req, res, next) {
 console.log(req.body);
  var userGuid = uuidv4().replace(/-/g, '');
  var userProfileGuid = uuidv4().replace(/-/g, '');
  var userRoleGuid = uuidv4().replace(/-/g, '');
  var roleGuid = 'da6fbe58e70b40c6bad023521d5750c5';
  var dateTime = new Date();
  var createdBy = '3fc65a80bfe945338d2367184a8eab06';
  req.getConnection(function(err, connection) {
    var userDataSql = "INSERT INTO user (email, emp_id, firstname, lastname, name, password, created, created_by, last_updated, last_updated_by, guid) VALUES ?";
    var userDataValues = [
      [req.body.userTableData.email, req.body.userTableData.emp_id, req.body.userTableData.firstname, req.body.userTableData.lastname, req.body.userTableData.name, req.body.userTableData.password, dateTime, createdBy, dateTime, createdBy, userGuid]
    ];
    connection.query(userDataSql, [userDataValues], function(error, results1, fields) {
      if (error) throw error;
      console.log("1 record inserted, ID: " + results1.insertId);
    });

    var userProfileDataSql = "INSERT INTO user_profile (user_guid, picture, dob, blood_group, marital_status, gender, present_address1, present_address2, present_city, present_state, present_pincode, permanent_address1, permanent_address2, permanent_city, permanent_state, permanent_pincode, aadhar_id, pan_number, mobile_number, phone_number, created, created_by, last_updated, last_updated_by, guid) VALUES ?";

    var userProfileDataValues = [
      [userGuid, userGuid+'.jpg', req.body.userProfileTableData.dob, req.body.userProfileTableData.bloodgroup, req.body.userProfileTableData.maritalstatus, req.body.userProfileTableData.gender, req.body.userProfileTableData.presentAddr1, req.body.userProfileTableData.presentAddr2, req.body.userProfileTableData.presentCity, req.body.userProfileTableData.presentState, req.body.userProfileTableData.presentPincode, req.body.userProfileTableData.permanentAddr1, req.body.userProfileTableData.permanentAddr2, req.body.userProfileTableData.permanentCity, req.body.userProfileTableData.permanentState, req.body.userProfileTableData.permanentPincode, req.body.userProfileTableData.aadhar, req.body.userProfileTableData.panno, req.body.userProfileTableData.mobile, req.body.userProfileTableData.phone, dateTime, createdBy, dateTime, createdBy, userProfileGuid]
    ];
    connection.query(userProfileDataSql, [userProfileDataValues], function(error, results2, fields) {
      if (error) throw error;
      console.log("1 record inserted, ID: " + results2.insertId);
    });

    var userRoleDataSql = "INSERT INTO user_role (user_guid, role_guid, created, created_by, last_updated, last_updated_by, guid) VALUES ?";
    var userRoleDataValues = [
      [userGuid, roleGuid, dateTime, createdBy, dateTime, createdBy, userRoleGuid]
    ];
    connection.query(userRoleDataSql, [userRoleDataValues], function(error, results3, fields) {
      if (error) throw error;
      console.log("1 record inserted, ID: " + results3.insertId);
    });

  //  if( !empty(results3.insertId) && !empty(results2.insertId) && !empty(results1.insertId)  ) {
      res.send({
        "code": 200,
        "message": "Registration sucessfull"
      });
    // } else {
    //   res.send({
    //     "code": 500,
    //     "message": "Internal Server error"
    //   });
    // }
  });
});

/* GET users listing. */
router.get('/:getAllUser', function(req, res, next) {
  req.getConnection(function(err, connection) {
    connection.query('SELECT * FROM user', function(error, results, fields) {
      if (error) {
        // console.log("error ocurred",error);
        res.send({
          "code": 400,
          "failed": "error ocurred"
        })
      } else {
        // console.log('The solution is: ', results);
        if (results.length > 0) {
            res.send({
              "code": 200,
              "message": "Users is found",
              "userdata": results
            });
        } else {
          res.send({
            "code": 204,
            "message": "Users is not found"
          });
        }
      }
    });
  });
});

module.exports = router;

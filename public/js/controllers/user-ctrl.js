/**
 * User Controller
 */

angular.module('RDash')
  .controller('UserCtrl', ['$scope', '$location', 'AuthServices', 'Utils', 'toaster', UserCtrl]);

function UserCtrl($scope, $location, AuthServices, Utils, toaster) {
  $scope.users = [];

  $scope.init = function() {
    $scope.getAllUser();
    $scope.user = {
      email: 'prakash.engg89@gmail.com',
      emp_id: '752320',
      firstname: 'Prakash',
      lastname: 'Balu',
      name: '752320',
      password: 'welcome123',
      cpassword: 'welcome123',
      dob: new Date('1989-06-08'),
      bloodgroup: 'A+ve',
      maritalstatus: 'single',
      gender: 'male',
      present:{
        addr1: '801, 48th Cross Street, Thiruvalluvar Nagar',
        addr2: 'Thiruvanmiyur',
        city: 'Chennai',
        state: 'Tamilnadu',
        pincode: '600041'
      },
      permanent: {
        addr1: '801, 48th Cross Street, Thiruvalluvar Nagar',
        addr2: 'Thiruvanmiyur',
        city: 'Chennai',
        state: 'Tamilnadu',
        pincode: '600041'
      },
      aadhar: '677630258044',
      panno: 'BEKPP9612N',
      mobile: '9944363757',
      phone: '04442016651',
    }
  };

  $scope.getAllUser = function() {
    AuthServices.getAllUser()
    .success(function(data){
      console.log(data);
      $scope.users = data.userdata
    }).error(function(error){
    	alert(error);
    });
  };

  $scope.registerUser = function(userData) {
    //     if(userData.password == userData.cpassword) {
    // 	$scope.users.push({name:userData.name,password:userData.cpassword});
    // 	$scope.setUsers();
    // 	$location.path("/");
    // }

    //console.log(userData);

    var userInfo = {
      userTableData: {
        email: userData.email,
        emp_id: userData.emp_id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        name: userData.emp_id,
        password: Utils.generateHashPassword(userData.cpassword)
      },
      userProfileTableData: {
        dob: userData.dob,
        bloodgroup: userData.bloodgroup,
        maritalstatus: userData.maritalstatus,
        gender: userData.gender,
        presentAddr1: userData.present.addr1,
        presentAddr2: userData.present.addr2,
        presentCity: userData.present.city,
        presentState: userData.present.state,
        presentPincode: userData.present.pincode,
        permanentAddr1: userData.permanent.addr1,
        permanentAddr2: userData.permanent.addr2,
        permanentCity: userData.permanent.city,
        permanentState: userData.permanent.state,
        permanentPincode: userData.permanent.pincode,
        aadhar: userData.aadhar,
        panno: userData.panno,
        mobile: userData.mobile,
        phone: userData.phone,
      }
    };
    $scope.setUsers(userInfo);
  };

  $scope.setUsers = function(userData) {
    var uData = {
      name: userData.userTableData.name,
      email: userData.userTableData.email,
      emp_id: userData.userTableData.emp_id,
      firstname: userData.userTableData.firstname,
      lastname: userData.userTableData.lastname,
      password: userData.userTableData.password
    }
    AuthServices.addUser(userData)
    .success(function(data){
    	console.log(data);
      toaster.pop({
          type: 'success',
          body: data.message,
          timeout: 1000
      });
      $scope.users.unshift(uData);
      $('#myModal').modal('hide');
    }).error(function(error){
    	//alert(error);
      $('#myModal').modal('hide');
      toaster.pop({
          type: 'error',
          body: 'Internal server error',
          timeout: 1000
      });
    });
  };

  //Call function initialization
  $scope.init();
}

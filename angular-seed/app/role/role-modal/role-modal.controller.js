angular.module("app.role").controller("RoleModalController",["$scope","$modalInstance","$ocLazyLoad","$injector","action","role",function(e,o,i,n,t,c){e.action=t,e.roleName=c.roleName,e.isSubmitting=!1,e.add=function(){e.isSubmitting=!0,i.load("app/role/role.service.js").then(function(){var i=n.get("roleService");i.add(e.roleName).success(function(i){e.isSubmitting=!1,o.close()})})},e.edit=function(){e.isSubmitting=!0,i.load("app/role/role.service.js").then(function(){var i=n.get("roleService");i.edit(c.roleId,e.roleName).success(function(i){e.isSubmitting=!1,o.close()})})},e.cancel=function(){o.dismiss()}}]);
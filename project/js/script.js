var Data = {
        name:'tasks',
        data:[
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'2',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'true',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'2',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'true',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'3',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'false',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'3',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'false',
                comments:[]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'1',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'false',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'2',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2016'
                },
                priority:'false',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            },
            {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
                status:'2',
                date:{
                    start:'03/05/2014',
                    end:'04/09/2017'
                },
                priority:'false',
                comments:[{text:'cool!',date:'15.12.2016'},{text:'best',date:'11.12.2016'}]
            }
        ]
    };



var app =angular.module('app',[]);




app.controller('mainCtrl',['$rootScope','$scope','$log',
function($rootScope,$scope,$log){
    $scope.first='Hello world';
    $scope.dataList=Data.data;
    $scope.editItam=function(item){
        $log.warn(item);};
    $scope.removeItem = function(item) {
        $scope.dataList.splice($scope.dataList.indexOf(item), 1);
    };
    $scope.addItem = function(text) {
        $scope.dataList.push({text: text, status: 1, priority: false});
    };
    $scope.selected='null';
    $scope.select = function(index){
        $scope.selected =index;
    };
    $scope.status = function (index,status){
        if(status == 1){

        }

    }
}]);
app.directive('taskList',['$log',
function($log){
    return{
        restrict:'E', //как будет вставляться деректива в код E это в тег   A атребут   С класс   можно и несколько букв !!! по умолчанию АЕ
        replace: false, //будет ли удаляться своей дерективы {taskList}
        controller: 'mainCtrl',  ///не обезятельно    область видимости
        templateUrl:'./template/task-list.html', /// разметка которая будет подтягиваться
        // создать  папку  и фаил
        link: function(scope,element,attrs){

        }
    }
}]);


$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );




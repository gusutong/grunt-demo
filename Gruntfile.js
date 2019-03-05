module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default',['less']);
  grunt.initConfig({
    less:{
      development:{
        files:{
          'css/layout.css':'less/layout.less'
        }
      }   
    }
  });
};

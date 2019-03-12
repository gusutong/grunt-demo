module.exports = function(grunt){
  grunt.initConfig({
    htmlmin:{
      dev: {     // Another target
        options:{
          collapseWhitespace:true,
          preservelLineBreaks:false
        }
        files: {
          'dist/index.html': 'src/index.html'
        }
      }                   
    }            
  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default',['htmlmin']);
};

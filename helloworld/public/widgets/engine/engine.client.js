jojo.ns("hellojojo");
(function() {

	hellojojo.engine = jojo.widget.create({
		name : "hellojojo.engine",
		path : "widgets/engine/",
		prototype : {
			initialize : function($super, options) {
				$super(options);
			},
			onReady : function(args) {

				var me = this;

				me.fsm = new jojo.fsm.finiteStateMachine({
					states : {
						initial : {
							stateStartup : function(fsm, args) {

							}
						}
					}
				}); // end me.fsm		
		        	//testing...
		        	setTimeout( function(e) {
       					me.server_doSomething([123, 456], function(result) {
						$('#msgrsp')[0].innerText = result.result.msg;
	        			});
				},3000);
			}
		}
	});

})();

jojo.ns("hellojojo");
(function() {

	hellojojo.engine = jojo.widget.create({
		name : "hellojojo.engine",
		path : "widgets/engine/",
		prototype : {
			initialize : function($super, options) {
				$super(options);
		        //testing...
       			this.server_doSomething([123, 456], function(result) {
//        			debugger;
        		});
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
			}
		}
	});

})();

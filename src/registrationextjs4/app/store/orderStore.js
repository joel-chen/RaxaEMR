/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 * This script initiates the registration module
 */

//the store for all orders in an encounter. 


Ext.define('Registration.store.orderStore', {
    extend: 'Ext.data.Store',
    model: 'Registration.model.orderModel',
    proxy: {
        type: 'rest',
        url : HOST + '/ws/rest/v1/order',
        headers: Util.getBasicAuthHeaders(),
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        },
        afterRequest:function(request,success){         //prints if request is successful
            console.log(success);
        }
    }
});
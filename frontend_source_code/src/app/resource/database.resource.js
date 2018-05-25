(function() {
    'use strict';
    /**
     * @name eolinker open source，eolinker开源版本
     * @link https://www.eolinker.com
     * @package eolinker
     * @author www.eolinker.com 广州银云信息科技有限公司 2015-2018

     * eolinker，业内领先的Api接口管理及测试平台，为您提供最专业便捷的在线接口管理、测试、维护以及各类性能测试方案，帮助您高效开发、安全协作。
     * 如在使用的过程中有任何问题，可通过[图片]http://help.eolinker.com寻求帮助
     *
     * 注意！eolinker开源版本遵循GPL V3开源协议，仅供用户下载试用，禁止“一切公开使用于商业用途”或者“以eoLinker开源版本为基础而开发的二次版本”在互联网上流通。
     * 注意！一经发现，我们将立刻启用法律程序进行维权。
     * 再次感谢您的使用，希望我们能够共同维护国内的互联网开源文明和正常商业秩序。
     *
     * @function [定义数据字典resource服务定义js] [Define the data dictionary resource service definition js]
     * @version  3.0.2
     * @service  $resource [注入$resource服务] [Inject the $resource service]
     * @constant serverUrl [注入前缀URL] [Inject the prefix URL]
     */
    angular.module('eolinker.resource')

    .factory('DatabaseResource', DatabaseResource)

    DatabaseResource.$inject = ['$resource', 'serverUrl'];

    function DatabaseResource($resource, serverUrl) {
        var data = {
            info: {
                api: [],
                method: 'POST'
            }
        }
        data.info.api['Database'] = $resource(serverUrl + '?g=Web&c=Database&o=:operate', {

            }, {
                Query: {
                    params: { operate: 'getDatabaseList' },
                    method: data.info.method
                },
                Add: {
                    params: { operate: 'addDatabase' },
                    method: data.info.method
                },
                Edit: {
                    params: { operate: 'editDatabase' },
                    method: data.info.method
                },
                Delete: {
                    params: { operate: 'deleteDatabase' },
                    method: data.info.method
                },
                Import: {
                    params: { operate: 'importDatabase' },
                    method: data.info.method
                },
                ImportByJson: {
                    params: { operate: 'importDatabseByJson' },
                    method: data.info.method
                },
                Dump:{
                    params:{operate:'exportDatabase'},
                    method:data.info.method
                },
                ImportOracle: {
                    params: { operate: 'importOracleDatabase' },
                    method: data.info.method,
                    cancellable:true
                },
                Detail: {
                    params: {
                        operate: 'getDatabase'
                    },
                    method: data.info.method,
                    cancellable: true
                }
            }

        );
        data.info.api['DatabaseTable'] = $resource(serverUrl + '?g=Web&c=DatabaseTable&o=:operate', {

            }, {
                Query: {
                    params: { operate: 'getTable' },
                    method: data.info.method
                },
                Add: {
                    params: { operate: 'addTable' },
                    method: data.info.method
                },
                Edit: {
                    params: { operate: 'editTable' },
                    method: data.info.method
                },
                Delete: {
                    params: { operate: 'deleteTable' },
                    method: data.info.method
                }
            }

        );
        data.info.api['Field'] = $resource(serverUrl + '?g=Web&c=DatabaseTableField&o=:operate', {

            }, {
                Query: {
                    params: { operate: 'getField' },
                    method: data.info.method
                },
                Add: {
                    params: { operate: 'addField' },
                    method: data.info.method
                },
                Edit: {
                    params: { operate: 'editField' },
                    method: data.info.method
                },
                Delete: {
                    params: { operate: 'deleteField' },
                    method: data.info.method
                }
            }

        );
        data.info.api['Partner'] = $resource(serverUrl + '?g=Web&c=DatabasePartner&o=:operate', {

            }, {
                Query: {
                    params: { operate: 'getPartnerList' },
                    method: data.info.method
                },
                Add: {
                    params: { operate: 'invitePartner' },
                    method: data.info.method
                },
                Delete: {
                    params: { operate: 'removePartner' },
                    method: data.info.method
                },
                Quit: {
                    params: { operate: 'quitPartner' },
                    method: data.info.method
                },
                Search: {
                    params: { operate: 'getPartnerInfo' },
                    method: data.info.method
                },
                SetType: {
                    params: { operate: 'editPartnerType' },
                    method: data.info.method
                },
                SetNickName: {
                    params: { operate: 'editPartnerNickName' },
                    method: data.info.method
                }
            }

        );
        return data.info.api;
    }
})();
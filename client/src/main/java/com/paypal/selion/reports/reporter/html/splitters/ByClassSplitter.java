/*-------------------------------------------------------------------------------------------------------------------*\
|  Copyright (C) 2014 PayPal                                                                                          |
|                                                                                                                     |
|  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
|  with the License.                                                                                                  |
|                                                                                                                     |
|  You may obtain a copy of the License at                                                                            |
|                                                                                                                     |
|       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
|                                                                                                                     |
|  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
|  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
|  the specific language governing permissions and limitations under the License.                                     |
\*-------------------------------------------------------------------------------------------------------------------*/

package com.paypal.selion.reports.reporter.html.splitters;

import java.util.ArrayList;
import java.util.List;

import org.testng.ITestResult;

import com.paypal.selion.logger.SeLionLogger;

/**
 * Internal use only. This class is responsible by the Velocity engine to render the "per class" view.
 */
public final class ByClassSplitter extends CollectionSplitter {
    @Override
    public List<String> getKeys(ITestResult result) {
        SeLionLogger.getLogger().entering(result);
        List<String> res = new ArrayList<String>();
        res.add(result.getMethod().getRealClass().getName());
        SeLionLogger.getLogger().exiting(res);
        return res;
    }

}

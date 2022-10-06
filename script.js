/*!*
 *
 * Issuebrief Builder JS
 *
 */

    function checkAllChildren(rootControl, checked)
    {
        //If it has child nodes, traverse them
        if( rootControl.hasChildNodes() )
        {
            for(var i = 0; i < rootControl.childNodes.length; i++)
            {
                checkAllChildren(rootControl.childNodes[i], checked);
            }
        }
        
        //If it is a checkbox... set it's value
        if( "checkbox" == rootControl.type )
        {
            rootControl.checked = checked;
        }
    }
    function disableCheckBoxes(rootControl, enabled)
    {
        //If it has child nodes, traverse them
        if( rootControl.hasChildNodes() )
        {
            for(var i = 0; i < rootControl.childNodes.length; i++)
            {
                disableCheckBoxes(rootControl.childNodes[i], enabled);
            }
        }
        
        //If it is a checkbox... set it's enabled state
        if( "checkbox" == rootControl.type )
        {
            rootControl.disabled = enabled;
        }
    }
    function isCheckedOrHasChildChecked(rootControl)
    {
        var childIsChecked = false;
    
        //If it has child nodes, traverse them
        if( rootControl.hasChildNodes() )
        {
            for(var i = 0; i < rootControl.childNodes.length; i++)
            {
                if( false == childIsChecked )
                {
                    childIsChecked = isCheckedOrHasChildChecked(rootControl.childNodes[i]);
                }
            }
        }
        
        if( childIsChecked )
        {
            return true;
        }
        else
        {
            //If it is a checkbox... check it's checked state
            if( "checkbox" == rootControl.type )
            {
                return rootControl.checked;
            }
            else
            {
                return false;
            }
        }
    }
    function CheckForChecks() { 
        var errorLabel1 = document.getElementById('errorLabel1');
        var errorLabel2 = document.getElementById('errorLabel2');
        errorLabel1.style.visibility='hidden';
        errorLabel2.style.visibility='hidden';
        if(isCheckedOrHasChildChecked(document.getElementById('divBuildYourOwnBrochure'))) { return true; }
        if(isCheckedOrHasChildChecked(document.getElementById('full-reports'))) { return true; }
        errorLabel1.style.visibility='visible';
        errorLabel2.style.visibility='visible';
        return false;
    }
    function checkParentCheck(checkBox, parentInput) {
        if (!checkBox.checked) {
            document.getElementById(parentInput).checked = false;
        }
    }
    
    function createIssueBuilderRequest() {
        // divBuildYourOwnBrochure div with all checkboxes
        // issueBuilder_allDownloads id of checkbox for "download all"
        
        // Make sure something is checked.
        if(!CheckForChecks())
            return false;
        
        var servletParameters = new Array();
        
        // If user has elected to only download a subset, then only get
        // "checked" checkboxes.
        //var checkboxFilter = (jQuery('#issueBuilder_allDownloads').is(':checked') ? '' : ':checked');
        
        //jQuery('#divBuildYourOwnBrochure INPUT[type="checkbox"][isparent="false"]' + checkboxFilter).each(function() {
        //  servletParameters.push(jQuery(this).attr('parameterPart'));
        //});
        
        if(jQuery('#issueBuilder_allDownloads').is(':checked')) {
            
            // Skip everything as we know we want to download everything
            servletParameters.push('all-issue-briefs');
            
        } else {
        
            // Get selected pages
            jQuery('#divBuildYourOwnBrochure INPUT[type="checkbox"][isparent="true"]').each(function() {
                
                if(jQuery(this).is(':checked') || jQuery(this).parent().find('UL INPUT[type="checkbox"]:checked').size() == jQuery(this).parent().find('UL INPUT[type="checkbox"]').size()) {
                    servletParameters.push(jQuery(this).attr('parameterPart'));
                } else {
                    jQuery(this).parent().find('UL INPUT[type="checkbox"]:checked').each(function() {
                        servletParameters.push(jQuery(this).attr('parameterPart'));
                    });
                }
                
            });
        
            // Get pdfs
            jQuery('#divBuildYourOwnBrochure INPUT[type="checkbox"][parameterPart$="pdf"]:checked').each(function() {
                servletParameters.push(jQuery(this).attr('parameterPart'));
            });
    }       
        // alert('PDF Generation Servlet Called with Parameter:\n\n' + servletParameters.join(','));
        
        // Make call to service, download pdf(s)...
        // If statement is not really needed, just have it in there to be safe.
        if(servletParameters.length > 0) {
            var downloadUrl = '/apps/csr/services/IssueBriefBuilder.pdf?download=' + servletParameters.join(';');
            
            //location.href = downloadUrl;
            
            window.open(downloadUrl);
        }
        
        // Clear inputs so user can choose another type of download.
        if(jQuery('#issueBuilder_allDownloads').is(':checked'))
            jQuery('#issueBuilder_allDownloads').click();
        else
            jQuery('#divBuildYourOwnBrochure INPUT[type="checkbox"]').attr('checked', false);
    }
    
    
    
    
    
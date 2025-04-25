function createPropertiesHTML() {
    return `
                <tr class="tr-default">
                    <td class="input_field" id="properties_field">Properties</td>
                    <td class="input_column">
                        <div class="properties_input_group">
                            <div id="properties_select_group">
                                <div id="selected_properties"></div>
                                <input id="properties_input" type="text"
                                    placeholder="Search by property, group, portfolio, or owner">
                                <div id="properties_selector_options"></div>
                            </div>
                            <div id="properties_selector_remove_all"><i class="fa fa-close"></i></div>
                        </div>
                    </td>
                </tr>
    `;
}


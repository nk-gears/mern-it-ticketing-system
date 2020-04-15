import React from 'react';
import TicketHeader from './TicketHeader';
import PropTypes from 'prop-types';

const TicketHeaders = ({ assigned, onSetField, onSort }) => {
  const emp_headers = [
    { 
      label: '#',
      id: 'sortById',
      data_sort: '_id'
    }, 
    { 
      label: 'Alert',
      id: 'sortByAlertLevel',
      data_sort: 'alertLevel'
    },
    { 
      label: 'Status',
      id: 'sortByStatus',
      data_sort: 'status'
    },
    { 
      label: 'Subject',
      id: 'sortByTitle',
      data_sort: 'title'
    },
    { 
      label: 'Assigned To',
      id: 'sortByAssignedTo',
      data_sort: 'assignedTo'
    },
    { 
      label: 'Priority',
      id: 'sortByPriorityLevel',
      data_sort: 'priorityLevel'
    },
    { 
      label: 'Date Issued',
      id: 'sortByDateIssued',
      data_sort: 'dateIssued'
    },
    {
      label: "Actions"
    }
  ];

  const tech_headers = [
    { 
      label: '#',
      id: 'sortById',
      data_sort: '_id'
    }, 
    { 
      label: 'Alert',
      id: 'sortByAlertLevel',
      data_sort: 'alertLevel'
    },
    { 
      label: 'Status',
      id: 'sortByStatus',
      data_sort: 'status'
    },
    { 
      label: 'Subject',
      id: 'sortByTitle',
      data_sort: 'title'
    },
    { 
      label: 'Issued By',
      id: 'sortByIssuedBy',
      data_sort: 'issuedBy'
    },
    { 
      label: 'Priority',
      id: 'sortByPriorityLevel',
      data_sort: 'priorityLevel'
    },
    { 
      label: 'Date Issued',
      id: 'sortByDateIssued',
      data_sort: 'dateIssued'
    },
    {
      label: "Actions"
    }
  ];
  
  return (
    <tr className="ticket-info">
      {assigned ? tech_headers.map(header => (
        <TicketHeader key={header.label} label={header.label} id={header.id} data_sort={header.data_sort} onSetField={onSetField} onSort={onSort}/>
      )) : emp_headers.map(header => (
        <TicketHeader key={header.label} label={header.label} id={header.id} data_sort={header.data_sort} onSetField={onSetField} onSort={onSort}/>
      ))}
    </tr>
  )
}

TicketHeaders.propTypes = {
  onSetField: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
};

export default TicketHeaders;
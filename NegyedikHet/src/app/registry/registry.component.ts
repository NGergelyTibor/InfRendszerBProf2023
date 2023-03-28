
import { Component } from '@angular/core';

interface RegistryRecord {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const INITIAL_RECORDS: RegistryRecord[] = [
  { id: 1, name: 'John Smith', email: 'john@example.com', phone: '555-1234' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '555-5678' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-9012' },
];

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent {
  records = INITIAL_RECORDS;
  newRecord: RegistryRecord = { id: 0, name: '', email: '', phone: '' };

  addRecord() {
    const nextId = this.records.length > 0 ? Math.max(...this.records.map(r => r.id)) + 1 : 1;
    this.newRecord.id = nextId;
    this.records.push(this.newRecord);
    this.newRecord = { id: 0, name: '', email: '', phone: '' };
  }

  deleteRecord(record: RegistryRecord) {
    this.records = this.records.filter(r => r !== record);
  }
}

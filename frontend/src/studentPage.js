import React, { Component } from "react";
import { Container, Header, Grid, Button } from "semantic-ui-react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

class StudentPage extends Component {
  handleDateSelect(e) {
    console.log(e);
  }
  render() {
    return (
      <Container>
        <Header textAlign="center" as="h1">
          Student Page
        </Header>
        <Grid>
          <Grid.Row>
            <Header as="h2">Hello {this.props.name} !</Header>
          </Grid.Row>
          <Grid.Row>
            <Button primary onClick={this.props.onLogoutClick}>
              Log Out
            </Button>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3">
              You can view your schedule here and make changes:
            </Header>
          </Grid.Row>
        </Grid>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={this.handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          eventClick={this.handleEventClick}
          eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      </Container>
    );
  }
}

export default StudentPage;
